# CRIMZO Landing Website

Production-ready React landing page for the CRIMZO social networking & live streaming app.

## Quick Start

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000

## Production Build

```bash
cd frontend
npm run production
```

Upload `dist/` or `crimzo-production.zip` to your hosting.

**Full deploy guide:** [frontend/DEPLOY.md](frontend/DEPLOY.md)

## Before going live

1. Place APK at `frontend/public/crmizo.apk`
2. Update `frontend/src/constants/appInfo.js`
3. Replace `yourdomain.com` in `frontend/public/sitemap.xml`

## Tech Stack

- React 19 + Vite 6
- React Router (SPA)
- Static deploy — works on cPanel, Netlify, Vercel, Cloudflare Pages