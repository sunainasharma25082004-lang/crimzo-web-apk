CRIMZO APK Setup
================

Place your Android APK file in this folder and name it:

  crmizo.apk

All download buttons on the website link to this file.

To update app info on the site, edit:
  frontend/src/constants/appInfo.js

  - version (currently 1.0.0)
  - size (currently ~45 MB)
  - androidMin (currently 6.0+)
  - email

After adding the APK, run:
  npm run build
  npm run pack

Upload the dist/ folder (or crimzo-production.zip) to your hosting.