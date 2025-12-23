# 79 Ratio website content

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/camos-projects-9829f16a/v0-79-ratio-website-content)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/vAyc1XC1VyY)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/camos-projects-9829f16a/v0-79-ratio-website-content](https://vercel.com/camos-projects-9829f16a/v0-79-ratio-website-content)**

## Cloudflare Pages CI/CD

Automated builds and deployments to Cloudflare Pages run through `.github/workflows/cloudflare-pages.yml`. Every push or pull request against `main`/`master` will install dependencies, run `npm run build:cloudflare` (which adapts the Next.js app into a worker bundle), and publish the contents of `.open-next` via `cloudflare/pages-action@v1`.

### Configure GitHub secrets

1. In your repository settings add `CLOUDFLARE_ACCOUNT_ID` with the account ID from the Cloudflare dashboard.
2. Create an API token with the **Cloudflare Pages** edit permission (plus **Workers KV:Edit** if you use KV) scoped to that account, and add it as `CLOUDFLARE_API_TOKEN`.
3. Trigger the workflow with a push, PR, or the **Run workflow** button under Actions.

### Manual deploy from your workstation

```bash
npm ci
npm run build:cloudflare
npx wrangler pages deploy .open-next --project-name 79ratio
```

`npm run build:cloudflare` uses `@opennextjs/cloudflare` to emit `.open-next/_worker.js`, which is required for Cloudflare Pages' worker runtime. Make sure your local environment has `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` configured (either via `wrangler login` or environment variables) before running the deploy command.

## Build your app

Continue building your app on:

**[https://v0.app/chat/projects/vAyc1XC1VyY](https://v0.app/chat/projects/vAyc1XC1VyY)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
# 79ratio
# 79ratio
