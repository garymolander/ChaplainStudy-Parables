# PAO Studies

The Pro Athletes Outreach player study site — a multi-week scripture series for NFL players.

## What's here

```
.
├── index.html              # Landing page — list of all studies
├── the-sower/              # Chapter 1
│   ├── index.html          # Player study page
│   └── pao-parables-ch1-the-sower.pdf
├── netlify.toml            # Netlify config (static, no build)
├── README.md
└── .gitignore
```

Each chapter gets its own folder. The URL is `/<chapter-slug>/` — e.g. `/the-sower/`.

## Adding a new chapter

1. Create a new folder, e.g. `the-mustard-seed/`.
2. Drop the chapter's `index.html` and PDF inside it.
3. Open the root `index.html` and update the corresponding "Coming Soon" card to point at the new folder. Replace the title and meta fields with the real ones.
4. Commit, push to GitHub. Netlify auto-deploys.

## Editing copy

For now, copy is edited directly in the HTML. Once Decap CMS is wired up, PAO staff can edit through a browser-based admin panel without touching the code.

## Local preview

Open `index.html` in a browser, or run `python3 -m http.server` from this folder and visit `http://localhost:8000`.
