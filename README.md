# Protofilio

A clean, animated portfolio built with Next.js 14 and Framer Motion. Sections highlight featured work, experience, and contact actions with a modern glass aesthetic.

## Getting started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

The site uses the app router (`/app`) and TypeScript. Update copy, links, and project data in `app/page.tsx` and `data/projects.ts` to make it yours.

## Deploying to GitHub Pages

This project is configured to export static HTML and assets so it can be hosted on GitHub Pages. The build automatically detects the repository name when running in GitHub Actions and applies the correct `basePath`/`assetPrefix`.

1. Make sure your repository is public and GitHub Pages is enabled for the `gh-pages` branch.
2. Add a workflow that builds and publishes the static output in `./out`. A minimal example:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

If you want to preview the exported site locally before pushing, run:

```bash
NEXT_PUBLIC_BASE_PATH=/your-repo-name npm run build
npx serve out
```

That ensures routes and assets are served under the same path GitHub Pages will use.
