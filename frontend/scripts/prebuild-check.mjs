import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const apkPath = resolve('public', 'crmizo.apk');

if (!existsSync(apkPath)) {
  console.warn('\n⚠️  WARNING: public/crmizo.apk is missing.');
  console.warn('   Users will get "problem parsing the package" if the host serves index.html instead.');
  console.warn('   Place your signed release APK at: frontend/public/crmizo.apk\n');
  process.exit(1);
}

const verify = spawnSync(process.execPath, ['scripts/verify-apk.mjs'], {
  stdio: 'inherit',
  cwd: resolve('.'),
});

if (verify.status !== 0) {
  process.exit(verify.status ?? 1);
}