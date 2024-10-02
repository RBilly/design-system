import type { Decorator } from '@storybook/react';

/**
 * Workaround to fix code source display.
 * Resets all onEvent props function as undefined to prevent displaying unused props.
 */
export const withCleanSourceCode: Decorator = (Story, context) => {
  for (const key in context.args) {
    if (key.startsWith('on') && typeof context.args[key] === 'function') {
      context.args[key] = undefined;
    }
  }
  return Story(context);
};
