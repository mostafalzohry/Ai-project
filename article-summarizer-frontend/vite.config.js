import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import Path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import { ViteAliases } from 'vite-aliases';
import eslint from 'vite-plugin-eslint';
import pages from './src/pages/pages.config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = Path.dirname(__filename);
const pagesInput = {};
pages.forEach((page) => {
  pagesInput[page.name] = page.path;
});

export default defineConfig({
  root: Path.resolve(__dirname, './src'),
  publicDir: '../public',
  base: './',

  build: {
    outDir: 'dist',
  },
  plugins: [
    react(),
    eslint(),
    ViteAliases(),
    legacy({
      targets: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'not dead'],
    }),
  ],
  css: {
    devSourcemap: true,
  },
  server: {
    hmr: true,
    port: 3000,
    host: '0.0.0.0',
  },
});
