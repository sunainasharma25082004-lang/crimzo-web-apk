import { openSync, readSync, fstatSync, closeSync } from 'node:fs';
import { resolve } from 'node:path';

const APK_PATH = resolve('public', 'crmizo.apk');
const EOCD_SIG = 0x06054b50;
const SCHEMES = {
  0x7109871a: 'v2',
  0xf05368c0: 'v3',
  0x1b93ad61: 'v3.1',
};

function readU32(buf, offset) {
  return buf.readUInt32LE(offset);
}

function readU64(buf, offset) {
  return Number(buf.readBigUInt64LE(offset));
}

function verifyApk(path) {
  const fd = openSync(path, 'r');
  const size = fstatSync(fd).size;
  const buf = Buffer.alloc(size);
  readSync(fd, buf, 0, size, 0);
  closeSync(fd);

  if (buf.slice(0, 2).toString() !== 'PK') {
    throw new Error('Not a ZIP/APK file (missing PK header).');
  }

  if (buf.slice(0, 15).toString().includes('<!DOCTYPE') || buf.slice(0, 5).toString() === '<html') {
    throw new Error('File is HTML, not an APK. Hosting is serving the wrong file.');
  }

  let eocdPos = -1;
  for (let i = size - 22; i >= 0; i -= 1) {
    if (readU32(buf, i) === EOCD_SIG) {
      eocdPos = i;
      break;
    }
  }
  if (eocdPos < 0) {
    throw new Error('ZIP End of Central Directory not found — APK is corrupted.');
  }

  const cdOffset = readU32(buf, eocdPos + 16);
  const magicOffset = cdOffset - 16;
  if (buf.slice(magicOffset, magicOffset + 16).toString() !== 'APK Sig Block 42') {
    throw new Error('APK is unsigned or has a broken signature block.');
  }

  const blockSize = readU64(buf, cdOffset - 24);
  const pairsStart = cdOffset - blockSize;
  const pairsEnd = magicOffset;

  const schemes = [];
  let offset = 0;
  const pairsLen = pairsEnd - pairsStart;
  while (offset + 8 <= pairsLen) {
    const id = readU32(buf, pairsStart + offset);
    const len = readU32(buf, pairsStart + offset + 4);
    offset += 8 + len;
    if (SCHEMES[id]) {
      schemes.push(SCHEMES[id]);
    }
  }

  if (!schemes.length) {
    throw new Error('APK signing block has no v2/v3 signature.');
  }

  return { size, schemes: [...new Set(schemes)] };
}

try {
  const result = verifyApk(APK_PATH);
  console.log(`✓ APK valid: ${(result.size / 1024 / 1024).toFixed(1)} MB, signed (${result.schemes.join(', ')})`);
} catch (err) {
  console.error(`\n✗ APK check failed: ${err.message}`);
  console.error('   Replace frontend/public/crmizo.apk with a properly signed release build.\n');
  process.exit(1);
}