# Async Twilight Imperium Documentation

A Jekyll-based documentation site for the Async Twilight Imperium Discord game, featuring a neon theme and responsive design.

## 🚀 Local Development

### Prerequisites
- Ruby 2.7+
- Bundler

### Setup
```bash
git clone https://github.com/your-username/async-ti-docs.git
cd async-ti-docs
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000` to see your site.

## 📝 Adding New Documentation

### 1. Create a new markdown file in `_docs/`
```markdown
---
layout: docs
title: "Your Page Title"
description: "Brief description of the page"
nav_order: 2.1
parent: "Section Name"  # Optional: for nested navigation
---

# Your Content Here
```

### 2. Navigation Structure
- **`nav_order`**: Controls the order in the sidebar (1, 2, 2.1, 2.2, etc.)
- **`parent`**: Groups pages under collapsible sections
- **`layout: docs`**: Uses the documentation template with sidebar

### 3. File Organization
```
_docs/
├── getting-started/
│   ├── welcome.md          # nav_order: 1
│   └── setup.md            # nav_order: 2
├── game-rules/
│   ├── basic-rules.md      # nav_order: 3.1, parent: "Game Rules"
│   └── advanced-rules.md   # nav_order: 3.2, parent: "Game Rules"
```

## 🎨 Styling

- **CSS**: `assets/css/main.css` - Main styles and neon theme
- **JavaScript**: `assets/js/main.js` - Interactive features
- **Layouts**: `_layouts/` - Page templates

## 🚀 Deployment

Push to `main` branch - GitHub Pages auto-deploys.

## 🤝 Contributing

1. Fork → Branch → Edit → Test → Pull Request
2. Test locally with `bundle exec jekyll build`
3. Ensure responsive design works on mobile

## 🆕 New to GitHub? Edit Files Directly!

If you're completely new to GitHub and just want to make simple edits, you can edit files right in your browser!

### Step 1: Find the file you want to edit
1. Navigate to the file in the repository (e.g., `_docs/welcome.md`)
2. Click the **pencil icon** (✏️) in the top-right corner of the file

### Step 2: Make your changes
1. Edit the text in the file
2. Select preview at the top of the page to see your changes

### Step 3: Commit your changes
1. At the top-right, select 'Commit changes...'
   - **Commit message**: Brief description (e.g., "Fix typo in welcome page")
   - **Extended description**: Add more details below
2. Click the green **"Propose changes"** button
3. Open a pull request
   - **Add a title**: Add a short tile
   - **Add a description**: Short description

### Step 4: Wait for review
- Your changes will be automatically submitted as a "Pull Request"
- A maintainer will review and approve your changes
- Once approved, your edits will appear on the live site!

### 💡 Tips for beginners:
- **Start small** - Fix typos or add simple clarifications
- **Be descriptive** - Explain what you changed and why
- **Don't worry about mistakes** - Maintainers can help fix issues
- **Ask questions** - Use the Discord if you're unsure about anything

---

**For questions**: Join our [Discord](https://discord.gg/VSKaFjq2) or check the documentation!
