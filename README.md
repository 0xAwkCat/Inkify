# Inkify

> A minimal, Docsify-inspired Markdown site template with a warm cream design system. Edit `.md` files — the site updates automatically.

**[Live Demo →](#)** <!-- 部署后替换为你的 GitHub Pages 链接 -->

![License](https://img.shields.io/badge/license-MIT-blue)
![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-success)

---

## Features

- **Zero build step** — pure HTML + CSS + Vanilla JS, no Node.js required
- **Hash routing** — SPA-style navigation without a server
- **Math rendering** — KaTeX for inline `$...$` and display `$$...$$` formulas
- **Syntax highlighting** — highlight.js with language labels and copy button
- **Warm design system** — cream palette with CSS variables, easy to retheme
- **Chinese-friendly** — LXGW WenKai Screen font, proper CJK rendering
- **GitHub Pages ready** — includes `.nojekyll`, works out of the box

## Quick Start

### Use as Template

Click **"Use this template"** on GitHub to create your own repo, then:

1. Edit `_sidebar.md` to set up navigation
2. Replace `home.md` with your homepage content
3. Add your `.md` files to `docs/`
4. Push → GitHub Pages serves it automatically

### Run Locally

```bash
# Any static file server works
python -m http.server 8080

# Or with Node.js
npx serve .
```

Open `http://localhost:8080`.

## File Structure

```
inkify/
├── index.html          # Entry point — loads all scripts and styles
├── home.md             # Site homepage (edit this)
├── _sidebar.md         # Navigation (edit this)
├── .nojekyll           # Required for GitHub Pages
├── styles/
│   ├── base.css        # CSS variables + reset (start here to retheme)
│   ├── layout.css      # Sidebar + content area layout
│   ├── markdown.css    # All Markdown element styles
│   └── components.css  # Sidebar nav component
├── scripts/
│   ├── router.js       # Hash-based routing
│   ├── fetcher.js      # Fetch .md files, handle 404
│   ├── renderer.js     # marked.js + KaTeX + copy buttons
│   └── sidebar.js      # Sidebar rendering + active state
└── docs/               # Your content goes here
    ├── example-01.md
    └── example-02.md
```

## Customization

### Colors

All colors are CSS variables in `styles/base.css`:

```css
:root {
  --cream:        #F5F3EE;   /* page background */
  --cream-dark:   #EDEAE3;   /* sidebar, code bg */
  --cream-darker: #E2DED6;   /* deeper bg layer */
  --ink:          #1C1917;   /* primary text */
  --ink-mid:      #514B44;   /* secondary text */
  --ink-soft:     #968E84;   /* muted text */
  --accent:       #7A6A5A;   /* links, borders, active nav */
  --accent-light: #A89888;   /* bullet points, wavy underline */
  --sidebar-w:    240px;
}
```

### Fonts

- **Headings** — Cormorant Garamond (serif)
- **Body** — DM Sans + LXGW WenKai Screen (CJK)
- **Code** — JetBrains Mono

Replace font links in `index.html` to use different typefaces.

### Sidebar

Edit `_sidebar.md`:

```markdown
- [Home](/)
- [Page Title](docs/filename)
```

File names in `docs/` should be ASCII (URL encoding issues with CJK filenames).

## Deploy to GitHub Pages

1. Push your repo to GitHub
2. Go to **Settings → Pages → Source**: select `main` branch, root directory
3. Save — your site will be live at `https://username.github.io/repo-name`

The `.nojekyll` file ensures GitHub Pages serves all files without Jekyll processing.

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge). Requires `navigator.clipboard` for the copy button (HTTPS or localhost only).

## License

MIT — free to use, modify, and distribute.
