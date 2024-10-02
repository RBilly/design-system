import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { baseButtonStyles, baseButtonVars } from '../Button';
import { designTokens } from '../styles/designTokens';

const vars = {
  borderWidth: createVar()
};

const base = style([
  baseButtonStyles,
  {
    vars: {
      [vars.borderWidth]: '1px',
      [baseButtonVars.parentBorderWidth]: vars.borderWidth,
      [baseButtonVars.px]: designTokens.spacing.m200
    },

    borderWidth: vars.borderWidth,
    borderStyle: 'solid',
    borderColor: designTokens.color.border.default,
    font: designTokens.typography.body.medium,
    color: designTokens.color.icon.primary,

    selectors: {
      '&[data-hovered]': {
        backgroundColor: designTokens.color.background.hovered
      },
      '&[data-pressed]': {
        backgroundColor: designTokens.color.background.pressed
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
        borderWidth: '0px !important'
      }
    }
  },
  defaultVariants: {
    variant: 'outlined'
  }
});

export { vars, base, container };
