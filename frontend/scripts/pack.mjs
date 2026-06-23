import { existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { resolve } from 'node:path';

const distDir = resolve('dist');
const zipName = 'crimzo-production.zip';

if (!existsSync(distDir)) {
  console.error('dist/ folder not found. Run: npm run build');
  process.exit(1);
}

const isWindows = process.platform === 'win32';

try {
  if (isWindows) {
    execSync(
      `powershell -NoProfile -Command "Compress-Archive -Path '${distDir}\\*' -DestinationPath '${zipName}' -Force"`,
      { stdio: 'inherit' },
    );
  } else {
    execSync(`cd dist && zip -r ../${zipName} .`, { stdio: 'inherit' });
  }
  console.log(`\n✓ Production package ready: ${zipName}`);
  console.log('  Upload the ZIP contents to your hosting (cPanel public_html, etc.)\n');
} catch {
  console.error('Failed to create zip. Upload the dist/ folder manually.');
  process.exit(1);
}