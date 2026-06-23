import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { cpSync, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const PUBLIC_EXCLUDE = ['assets/creators_old'];

function copyPublicDir(outDir) {
  const publicDir = resolve('public');
  if (!existsSync(publicDir)) return;

  function copyRecursive(src, dest, rel = '') {
    for (const entry of readdirSync(src)) {
      const relPath = rel ? `${rel}/${entry}` : entry;
      if (PUBLIC_EXCLUDE.some((ex) => relPath === ex || relPath.startsWith(`${ex}/`))) {
        continue;
      }

      const from = join(src, entry);
      const to = join(dest, entry);

      if (statSync(from).isDirectory()) {
        mkdirSync(to, { recursive: true });
        copyRecursive(from, to, relPath);
      } else {
        mkdirSync(join(to, '..'), { recursive: true });
        try {
          cpSync(from, to);
        } catch {
          console.warn(`Skipped locked public file: ${relPath}`);
        }
      }
    }
  }

  copyRecursive(publicDir, outDir);
}

function selectivePublicCopy() {
  let outDir;
  return {
    name: 'selective-public-copy',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      copyPublicDir(outDir);
    },
  };
}

export default defineConfig(({ command }) => ({
  publicDir: command === 'serve' ? 'public' : false,
  plugins: [
    react(),
    ...(command === 'build' ? [selectivePublicCopy()] : []),
  ],
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 4173,
    open: true,
  },
}));