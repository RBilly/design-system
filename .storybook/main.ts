import type { StorybookConfig } from '@storybook/react-vite';

/**
 * Configure Storybook project's behavior.
 */
const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../docs/storybook/*.mdx'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-docs'],
  core: {
    disableTelemetry: true
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    // Include existing props from third-party libraries.
    // See https://storybook.js.org/docs/configure/typescript#extending-the-default-configuration
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false
      },
      // Do not filter props except for `key`.
      // See https://github.com/styleguidist/react-docgen-typescript?tab=readme-ov-file#propfilter
      propFilter: {
        skipPropsWithName: ['key']
      }
    }
  }
};

export default config;
