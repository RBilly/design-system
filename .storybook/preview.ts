import type { Preview } from '@storybook/react';
import { theme } from './custom.theme';
import './fonts.scss';
import { withAccentBackground, withCleanSourceCode } from './decorators';

/**
 * Control the way stories are rendered globally.
 */
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        order: [
          'Overview',
          ['Introduction', 'Getting Started', 'Changelog'],
          'Fundamentals',
          [
            'Design Tokens',
            'Colors',
            'Border Radius',
            'Elevation',
            'Spacing',
            'Typography',
            'Icons'
          ],
          'Components'
        ]
      }
    },
    controls: {
      expanded: true,
      matchers: {
        date: /Date$/
      },
      sort: 'requiredFirst'
    },
    layout: 'centered',
    backgrounds: {
      disable: true
    },
    docs: {
      theme,
      toc: { headingSelector: 'h1, h2, h3', ignoreSelector: '#stories' }
    }
  },
  tags: ['autodocs'],
  decorators: [withCleanSourceCode, withAccentBackground]
};

export default preview;
