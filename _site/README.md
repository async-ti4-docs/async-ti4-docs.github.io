# Async Twilight Imperium Documentation Site

A beautiful, modern documentation site for the Async Twilight Imperium Discord-based game, built with Jekyll and featuring a washed-out neon theme.

## 🌌 About

Async Twilight Imperium is a Discord-based implementation of the epic space strategy game Twilight Imperium 4th Edition, adapted for asynchronous play. This documentation site provides comprehensive guides, rules, and information for players.

## ✨ Features

- **Washed-Out Neon Theme**: Beautiful, eye-friendly design with neon accents
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Jekyll-Based**: Fast, static site generation with GitHub Pages support
- **Interactive Elements**: Code copy buttons, smooth scrolling, and animations
- **Comprehensive Documentation**: Complete guides for getting started and playing

## 🚀 Quick Start

### Prerequisites

- Ruby 2.7 or higher
- RubyGems
- Bundler

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/async-ti-docs.git
   cd async-ti-docs
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Run the development server**
   ```bash
   bundle exec jekyll serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4000`

## 🏗️ Project Structure

```
async-ti-docs/
├── _layouts/          # Jekyll layout templates
├── _docs/             # Documentation markdown files
├── assets/            # CSS, JavaScript, and images
│   ├── css/          # Stylesheets
│   ├── js/           # JavaScript files
│   └── images/       # Images and icons
├── _config.yml        # Jekyll configuration
├── Gemfile           # Ruby dependencies
└── README.md         # This file
```

## 🎨 Customization

### Colors and Theme

The washed-out neon theme uses CSS custom properties defined in `assets/css/main.css`:

```css
:root {
    --neon-cyan: rgba(0, 255, 255, 0.3);
    --neon-pink: rgba(255, 20, 147, 0.3);
    --neon-purple: rgba(147, 0, 211, 0.3);
    --neon-green: rgba(0, 255, 127, 0.3);
    --neon-orange: rgba(255, 165, 0, 0.3);
}
```

### Adding New Documentation

1. Create a new markdown file in the `_docs/` directory
2. Use the `docs` layout in the front matter
3. Add navigation links in `_config.yml`

Example:
```markdown
---
layout: docs
title: "Commands"
description: "Commands to use with the bot, to fix an issue or override something."
nav_order: 7.2
parent: Commands
---

# Your Content Here
```

## 🚀 Deployment

### GitHub Pages

1. Push your changes to the `main` branch
2. GitHub Pages will automatically build and deploy your site
3. Your site will be available at `https://your-username.github.io/async-ti-docs`

### Custom Domain

1. Add your custom domain in GitHub repository settings
2. Update the `url` field in `_config.yml`
3. Add a `CNAME` file with your domain

## 🛠️ Development

### Adding New Features

- **CSS**: Add styles to `assets/css/main.css`
- **JavaScript**: Add functionality to `assets/js/main.js`
- **Layouts**: Create new layouts in `_layouts/`
- **Includes**: Add reusable components in `_includes/`

### Testing

- Run `bundle exec jekyll build` to check for build errors
- Use `bundle exec jekyll serve --livereload` for development with auto-reload
- Test responsive design across different screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Twilight Imperium**: Fantasy Flight Games for the amazing board game
- **Jekyll**: The static site generator that powers this site
- **Community**: All the players and contributors who make Async TI possible


---

**May your empire prosper and your strategies prevail!** 🌌✨
