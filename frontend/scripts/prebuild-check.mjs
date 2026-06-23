import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const apkPath = resolve('public', 'crmizo.apk');

if (!existsSync(apkPath)) {
  console.warn('\n⚠️  WARNING: public/crmizo.apk is missing.');
  console.warn('   Download buttons will not work until you add your APK file.');
  console.warn('   Place your Android APK at: frontend/public/crmizo.apk\n');
} else {
  console.log('✓ APK file found: public/crmizo.apk');
}