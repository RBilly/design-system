import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { baseButtonStyles } from '../Button';
import { toolButtonStyles } from '../ToolButton';
import { designTokens } from '../styles/designTokens';

const base = style([
  baseButtonStyles,
  toolButtonStyles,
  {
    selectors: {
      '&[data-selected]': {
        backgroundColor: designTokens.color.background.sunken,
        boxShadow: designTokens.shadow.sunken
      }
    }
  }
]);

const container = recipe({
  base,
  variants: {
    variant: {
      outlined: {},
      text: {
        border: 'none !important',
        boxShadow: 'none !important'
      }
    },
    shape: {
      square: {},
      circle: {
        padding: designTokens.spacing.s100,
        borderRadius: designTokens.radius.full,
        '&[data-focused]::before': {
          borderRadius: designTokens.radius.full
        }
      }
    }
  },
  defaultVariants: {
    variant: 'outlined',
    shape: 'square'
  }
});

export { base, container };
