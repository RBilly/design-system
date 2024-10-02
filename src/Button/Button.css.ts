import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { designTokens } from '../styles/designTokens';
import { baseButtonStyles, baseButtonVars } from './BaseButton.css';

const OUTLINED_BORDER_WIDTH = 2;

const textOutlinedVariantsOnDefaultBackground = style({
  color: designTokens.color.text.link.default,

  selectors: {
    '&[data-hovered]': {
      backgroundColor: designTokens.color.background.hovered
    },
    '&[data-pressed]': {
      backgroundColor: designTokens.color.background.pressed
    }
  }
});

const textOutlinedVariantsOnAccentBackground = style({
  color: designTokens.color.text.onAccent,

  selectors: {
    '&[data-hovered]': {
      backgroundColor: designTokens.color.background.brandHover
    },
    '&[data-pressed]': {
      backgroundColor: designTokens.color.background.brandPressed
    }
  }
});

const container = recipe({
  base: [
    baseButtonStyles,
    {
      font: designTokens.typography.label.large
    }
  ],

  variants: {
    variant: {
      text: {},
      filled: {},
      outlined: {
        vars: {
          [baseButtonVars.parentBorderWidth]: `${OUTLINED_BORDER_WIDTH}px`
        },

        borderWidth: OUTLINED_BORDER_WIDTH,
        borderStyle: 'solid'
      }
    },
    onBackground: {
      default: {},
      accent: {}
    },
    block: {
      true: {
        width: '100%'
      }
    },
    isLoading: {
      true: {
        cursor: 'wait'
      }
    }
  },

  compoundVariants: [
    {
      variants: {
        variant: 'text',
        onBackground: 'default'
      },
      style: textOutlinedVariantsOnDefaultBackground
    },
    {
      variants: {
        variant: 'filled',
        onBackground: 'default'
      },
      style: {
        backgroundColor: designTokens.color.background.brand,
        color: designTokens.color.text.onAccent,

        selectors: {
          '&[data-hovered]': {
            backgroundColor: designTokens.color.background.brandHover
          },
          '&[data-pressed]': {
            backgroundColor: designTokens.color.background.brandPressed
          }
        }
      }
    },
    {
      variants: {
        variant: 'outlined',
        onBackground: 'default'
      },
      style: [
        textOutlinedVariantsOnDefaultBackground,
        {
          borderColor: designTokens.color.border.selected
        }
      ]
    },
    {
      variants: {
        variant: 'text',
        onBackground: 'accent'
      },
      style: textOutlinedVariantsOnAccentBackground
    },
    {
      variants: {
        variant: 'filled',
        onBackground: 'accent'
      },
      style: {
        backgroundColor: designTokens.color.background.default,
        color: designTokens.color.text.link.default,

        selectors: {
          '&[data-hovered]': {
            backgroundColor: designTokens.color.background.hovered
          },
          '&[data-pressed]': {
            backgroundColor: designTokens.color.background.pressed
          }
        }
      }
    },
    {
      variants: {
        variant: 'outlined',
        onBackground: 'accent'
      },
      style: [
        textOutlinedVariantsOnAccentBackground,
        {
          borderColor: designTokens.color.border.onAccent
        }
      ]
    }
  ],

  defaultVariants: {
    variant: 'text',
    onBackground: 'default'
  }
});

const loadingWrapper = style({
  position: 'fixed',
  display: 'flex'
});

const contentWrapper = recipe({
  base: {
    visibility: 'visible'
  },
  variants: {
    hide: {
      true: {
        visibility: 'hidden'
      }
    }
  }
});

export { container, loadingWrapper, contentWrapper };
