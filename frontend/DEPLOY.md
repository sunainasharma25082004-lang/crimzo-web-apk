# CRIMZO — Production Deploy Guide

## Before you deploy

1. **Add your APK** (required for download buttons):
   ```
   frontend/public/crmizo.apk
   ```

2. **Update site info** in `src/constants/appInfo.js` (version, size, email).

3. **Update sitemap** — replace `yourdomain.com` in `public/sitemap.xml` with your real domain.

4. **Optional** — copy `.env.example` to `.env` and set:
   ```
   VITE_SITE_URL=https://yourdomain.com
   VITE_CONTACT_EMAIL=support@yourdomain.com
   ```

---

## Build production files

```bash
cd frontend
npm install
npm run production
```

This creates:
- `dist/` — upload this folder to hosting
- `crimzo-production.zip` — ready-to-upload zip package

Test locally before upload:
```bash
npm run preview
```
Open http://localhost:4173

---

## Option A: cPanel / Shared Hosting (recommended)

1. Run `npm run production`
2. Open `crimzo-production.zip` and extract all files
3. Login to cPanel → **File Manager** → `public_html`
4. Upload **all files inside dist** (not the dist folder itself):
   - `index.html`
   - `assets/` folder
   - `.htaccess` (enable "Show Hidden Files" in File Manager)
   - `robots.txt`, `sitemap.xml`, `manifest.json`
   - `crmizo.apk`
5. Visit your domain — site should load

> `.htaccess` handles React routing (`/privacy`, `/terms` work on refresh).

---

## Option B: Netlify

1. Drag & drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect Git repo — `netlify.toml` is already configured

---

## Option C: Vercel

```bash
npm i -g vercel
cd frontend
npm run build
vercel --prod
```

`vercel.json` handles SPA routing.

---

## Option D: Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Add redirect rule: `/* /index.html 200`

---

## After deploy checklist

- [ ] Homepage loads with logo + CRIMZO branding
- [ ] Download APK button works
- [ ] `/privacy` and `/terms` pages open
- [ ] Mobile menu works
- [ ] Creator photos visible
- [ ] Favicon shows in browser tab

---

## Not using Render?

This project is a **static site** — no server needed. Works on any hosting that serves HTML files. Render is **not required**.