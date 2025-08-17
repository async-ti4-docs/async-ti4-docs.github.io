// Main JavaScript for Async TI Docs Site

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }
    
    // Code block copy functionality
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(function(codeBlock) {
        const pre = codeBlock.parentElement;
        const language = getLanguageFromClass(codeBlock.className);
        
        // Create code header with language and copy button
        const header = document.createElement('div');
        header.className = 'code-header';
        
        const languageLabel = document.createElement('span');
        languageLabel.className = 'language-label';
        languageLabel.textContent = language || 'text';
        
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.textContent = 'Copy';
        
        header.appendChild(languageLabel);
        header.appendChild(copyButton);
        
        // Insert header before the pre element
        pre.parentNode.insertBefore(header, pre);
        
        // Copy functionality
        copyButton.addEventListener('click', function() {
            copyToClipboard(codeBlock.textContent);
            
            // Visual feedback
            copyButton.textContent = 'Copied!';
            copyButton.classList.add('copied');
            
            setTimeout(function() {
                copyButton.textContent = 'Copy';
                copyButton.classList.remove('copied');
            }, 2000);
        });
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active state to current navigation item
    highlightCurrentNavItem();
    
    // Add scroll effects
    addScrollEffects();
    
    // Initialize nested navigation
    initializeNestedNav();
    
    // Initialize search functionality
    initializeSearch();
});

// Helper function to get language from code block class
function getLanguageFromClass(className) {
    if (!className) return 'text';
    
    const languageMatch = className.match(/language-(\w+)/);
    return languageMatch ? languageMatch[1] : 'text';
}

// Copy text to clipboard
async function copyToClipboard(text) {
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            
            try {
                document.execCommand('copy');
            } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
            }
            
            textArea.remove();
        }
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

// Highlight current navigation item
function highlightCurrentNavItem() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link, .docs-nav-link');
    
    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}

// Add scroll effects
function addScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.docs-main, .docs-sidebar, .article-content h2, .article-content h3');
    animateElements.forEach(function(element) {
        observer.observe(element);
    });
}

// Search functionality will be initialized by the complete function below

// Theme toggle (if you want to add multiple themes later)
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme') || 'washed-neon';
    
    // You can add more themes here
    const themes = ['washed-neon', 'dark', 'light'];
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    
    body.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
}

// Initialize theme from localStorage
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'washed-neon';
    document.body.setAttribute('data-theme', savedTheme);
}

// Initialize theme on page load
initializeTheme();

// Search functionality
function initializeSearch() {
    console.log('Initializing search...');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    console.log('Search input:', searchInput);
    console.log('Search results:', searchResults);
    
    if (!searchInput || !searchResults) {
        console.log('Search elements not found, returning');
        return;
    }
    
    // Search data - we'll populate this from Jekyll
    let searchData = [];
    
    // Initialize search data from Jekyll
    if (window.searchData) {
        searchData = window.searchData;
        console.log('Search data loaded:', searchData.length, 'items');
    } else {
        console.log('No search data found in window.searchData');
    }
    
    // Debounce function to limit API calls
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Search function
    function performSearch(query) {
        if (!query.trim()) {
            searchResults.classList.remove('active');
            return;
        }
        
        const results = searchData.filter(item => {
            const searchText = `${item.title} ${item.content} ${item.tags || ''}`.toLowerCase();
            return searchText.includes(query.toLowerCase());
        });
        
        displaySearchResults(results, query);
    }
    
    // Display search results
    function displaySearchResults(results, query) {
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="no-results">No results found</div>';
        } else {
            const resultsHTML = results.slice(0, 8).map(item => {
                const excerpt = getExcerpt(item.content, query);
                return `
                    <div class="search-result-item" data-url="${item.url}">
                        <div class="search-result-title">${highlightQuery(item.title, query)}</div>
                        <div class="search-result-excerpt">${excerpt}</div>
                        <div class="search-result-path">${item.url}</div>
                    </div>
                `;
            }).join('');
            
            searchResults.innerHTML = resultsHTML;
        }
        
        searchResults.classList.add('active');
        
        // Add click handlers to results
        const resultItems = searchResults.querySelectorAll('.search-result-item');
        resultItems.forEach(item => {
            item.addEventListener('click', function() {
                const url = this.getAttribute('data-url');
                if (url) {
                    window.location.href = url;
                }
            });
        });
    }
    
    // Get excerpt with highlighted query
    function getExcerpt(content, query) {
        const maxLength = 120;
        const queryLower = query.toLowerCase();
        const contentLower = content.toLowerCase();
        const queryIndex = contentLower.indexOf(queryLower);
        
        if (queryIndex === -1) {
            return content.substring(0, maxLength) + (content.length > maxLength ? '...' : '');
        }
        
        const start = Math.max(0, queryIndex - 30);
        const end = Math.min(content.length, queryIndex + query.length + 30);
        let excerpt = content.substring(start, end);
        
        if (start > 0) excerpt = '...' + excerpt;
        if (end < content.length) excerpt = excerpt + '...';
        
        return highlightQuery(excerpt, query);
    }
    
    // Highlight query in text
    function highlightQuery(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark style="background: rgba(255, 20, 147, 0.3); color: var(--text-primary);">$1</mark>');
    }
    
    // Event listeners
    searchInput.addEventListener('input', debounce(function() {
        performSearch(this.value);
    }, 300));
    
    // Close search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });
    
    // Close search results on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchResults.classList.remove('active');
            searchInput.blur();
        }
    });
}

// Initialize nested navigation
function initializeNestedNav() {
    const navGroups = document.querySelectorAll('.nav-group');
    
    navGroups.forEach(function(group) {
        const header = group.querySelector('.nav-group-header');
        const toggle = group.querySelector('.nav-group-toggle');
        
        if (header && toggle) {
            header.addEventListener('click', function() {
                group.classList.toggle('collapsed');
                
                // Save state to localStorage
                const groupTitle = group.querySelector('.nav-group-title').textContent;
                const isCollapsed = group.classList.contains('collapsed');
                localStorage.setItem(`nav-group-${groupTitle}`, isCollapsed);
            });
            
            // Restore collapsed state from localStorage
            const groupTitle = group.querySelector('.nav-group-title').textContent;
            const wasCollapsed = localStorage.getItem(`nav-group-${groupTitle}`) === 'true';
            if (wasCollapsed) {
                group.classList.add('collapsed');
            }
        }
    });
}
