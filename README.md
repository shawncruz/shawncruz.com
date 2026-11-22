# shawncruz.com

My personal website, built with [Astro](https://astro.build) and hosted at https://shawncruz.com.

## Develop

Requires Node.js 22.23.4+ (Node 26 LTS recommended).

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # static site in dist/
```

## Write a post

Add an `.mdx` file to `src/content/blog/`. The file name becomes the URL (`/posts/<file-name>`).

```mdx
---
title: "Post title"
description: "One-line teaser shown on the home page"
pubDate: 2026-11-22
---

Post body in Markdown/MDX.
```

## Deploy

Build locally, then upload `dist/` to the server:

```bash
npm run build
rsync -avz --delete dist/ shawn@SERVER_IP:/var/www/shawncruz.com/
```
