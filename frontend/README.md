# CRMIZO Landing Website (Frontend)

Modern React landing page for CRMIZO — social networking & live streaming app.

## Folder Structure

```
frontend/
├── public/
│   ├── assets/       ← logos, screenshots, graphics
│   ├── crmizo.apk    ← place your APK here
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── components/
    ├── pages/
    ├── hooks/
    └── constants/
```

## Setup & Run

```bash
npm install
npm run dev
```

Open **http://localhost:3000**

## Production Build

```bash
npm run build
```

Deploy the `dist/` folder to any static host (Netlify, Vercel, cPanel, etc.).

## Add Your APK

Place your Android APK at:

```
public/crmizo.apk
```

## Tech Stack

- React 19 + Vite
- React Router (Privacy & Terms pages)
- Pure CSS (glassmorphism, animations)