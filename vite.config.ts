/// <reference types="vitest" />
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
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
        api: 'modern-compiler'
      }
    }
  },
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setup.ts'
  },
  resolve: {
    alias: [
      {
        // Workaround to emulate behavior of ~ prefix in Webpack that refers to a relative path in node_modules folder
        find: /~(.+)/,
        replacement: `${process.cwd()}/node_modules/$1`
      }
    ]
  }
});
