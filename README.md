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

Cloudflare Pages builds run in Cloudflare when the repo is connected (no API keys required). Set the Pages **Build command** to `npm run build`, the **Build output directory** to `out`, and leave the **Deploy command** empty. The site is exported statically via `output: "export"` in `next.config.mjs`.

### Optional GitHub Actions deploy (requires API keys)

Automated builds and deployments to Cloudflare Pages run through `.github/workflows/cloudflare-pages.yml` when `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` are configured.

1. Create an API token with **Cloudflare Pages:Edit** (plus **Workers KV:Edit** if you use KV) scoped to the account, and add it as `CLOUDFLARE_API_TOKEN`.
2. Add `CLOUDFLARE_ACCOUNT_ID`.
3. Trigger the workflow with a push to `main`/`master` or the **Run workflow** button under Actions.

### Manual deploy from your workstation

```bash
npm ci
npm run build
npx wrangler pages deploy out --project-name 79ratio
```

Make sure your local environment has `CLOUDFLARE_API_TOKEN` configured (either via `wrangler login` or environment variables) before running the deploy command.

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
