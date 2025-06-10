import type { Decorator } from '@storybook/react-vite';

const DEFAULT_BACKGROUND_COLOR = '#fff';
const ACCENT_BACKGROUND_COLOR = '#0f69af';

function isDocsStoryContainerElement(element: HTMLElement) {
  return element.className.includes('docs-story');
}

function getDocsStoryContainerElement(element: HTMLElement) {
  let currentElement: HTMLElement | null = element;
  let isStoryContainerElement = false;

  while (currentElement && !isStoryContainerElement) {
    currentElement = currentElement.parentElement;
    if (currentElement) {
      isStoryContainerElement = isDocsStoryContainerElement(currentElement);
    }
  }

  return currentElement;
}

/**
 * Automatically sets the story background color when the `onAccentBackground` argument changes.
 * Storybook background addons is not used here to avoid side effects on other stories.
 */
export const withAccentBackground: Decorator = (Story, context) => {
  let storyContainerElement: HTMLElement | null = null;

  if (context.viewMode === 'story') {
    // On story mode, the first parent element of the canvas can be completely filled.
    storyContainerElement = context.canvasElement.parentElement;
  } else if (context.viewMode === 'docs') {
    // On docs mode, the first parent element of the canvas is the same size as the canvas.
    // First element that can be completely filled is the one with the `docs-story` class name.
    storyContainerElement = getDocsStoryContainerElement(context.canvasElement);
  }

  if (storyContainerElement) {
    storyContainerElement.style.backgroundColor = context.args.onAccent
      ? ACCENT_BACKGROUND_COLOR
      : DEFAULT_BACKGROUND_COLOR;
  }

  return Story(context);
};
