/// <reference types="vitest" />
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { NodePackageImporter } from 'sass-embedded';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: false,
  plugins: [
    vanillaExtractPlugin(),
    svgrPlugin({
      svgrOptions: {
        // Remove `width` and `height` attributes.
        dimensions: false
      },
      include: '**/*.svg'
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        importers: [new NodePackageImporter()]
      }
    }
  },
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setup.ts'
  }
});
