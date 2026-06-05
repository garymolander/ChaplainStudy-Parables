# PAO Studies

The Pro Athletes Outreach player study site — a multi-week scripture series for NFL players.

## Architecture

- **Eleventy** static site generator builds the site from markdown data files.
- **Decap CMS** (formerly Netlify CMS) gives non-technical staff a browser-based editor at `/admin/`.
- **Netlify Identity + Git Gateway** handles authentication and lets editors commit changes via the CMS without needing a GitHub account.

## What's here

```
.
├── src/                          # Source content + templates
│   ├── chapters/                 # One markdown file per chapter (editable via CMS)
│   ├── _includes/                # Shared Nunjucks layouts (chapter.njk, pao-logo.njk)
│   ├── _data/site.json           # Site-level config (hero copy, footer, etc.)
│   ├── pdfs/                     # Printable PDF companions, one per chapter
│   └── index.njk                 # Landing page template
├── admin/                        # Decap CMS admin portal at /admin/
│   ├── index.html
│   └── config.yml                # Editable field schema for chapters + site config
├── netlify.toml                  # Build config + URL redirects + cache headers
├── package.json                  # Eleventy declared as dev dependency
├── .eleventy.js                  # Eleventy config
├── .nvmrc                        # Node 18
└── .gitignore
```

## Editing copy (for PAO staff)

1. Go to `https://pao-parables.netlify.app/admin/`
2. Log in with the email/password provisioned by Netlify Identity
3. Click a chapter to open the editor
4. Edit the fields, click Publish
5. The site updates automatically in about 30 seconds

## Local development (for Gary)

```bash
npm install
npm run dev      # local preview at http://localhost:8080
npm run build    # build to _site/
```
