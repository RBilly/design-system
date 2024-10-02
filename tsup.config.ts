import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';
import svgrPlugin from 'esbuild-plugin-svgr';
import { customAlphabet } from 'nanoid';
import { defineConfig } from 'tsup';

// Use nanoid with a custom alphabet to generate a prefix compliant with CSS classes.
const nanoid = customAlphabet('0123456789abcdef', 6);
const prefix = nanoid();

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  // ESM code does not need to be minified.
  // This is the role of the consumer.
  minify: false,
  splitting: false,
  // Generate sourcemap files.
  sourcemap: true,
  // Generate declaration file.
  dts: true,
  // Clean output directory before each build.
  clean: true,
  // Allow design tokens to be imported in sass files from `@bio4c/ui-kit/designTokens`.
  publicDir: true,
  esbuildPlugins: [
    vanillaExtractPlugin({
      // Uses a different prefix at each build to ensure classes names are unique for each version of the lib.
      identifiers: ({ hash }) => `_${prefix}__${hash}`,
      esbuildOptions: {
        loader: {
          '.svg': 'text'
        }
      }
    }),
    svgrPlugin({
      // Do not add React import.
      jsxRuntime: 'automatic',
      // Remove `width` and `height` attributes.
      dimensions: false
    })
  ]
});
