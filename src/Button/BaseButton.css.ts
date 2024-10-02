import { createVar, style } from '@vanilla-extract/css';
import { designTokens } from '../styles/designTokens';
import { reset } from '../styles/reset';

const baseButtonVars = {
  parentBorderWidth: createVar(),
  px: createVar()
};

const px = `calc(${baseButtonVars.px} - ${baseButtonVars.parentBorderWidth})`;
const py = `calc(${designTokens.spacing.s150} - ${baseButtonVars.parentBorderWidth})`;
const focusRingSize = `calc(100% + ${baseButtonVars.parentBorderWidth} * 2)`;

const baseButtonStyles = style([
  reset.button,
  {
    vars: {
      [baseButtonVars.parentBorderWidth]: '0px',
      [baseButtonVars.px]: designTokens.spacing.l300
    },

    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: designTokens.spacing.s100,
    paddingTop: py,
    paddingRight: px,
    paddingBottom: py,
    paddingLeft: px,
    border: 'none',
    borderRadius: designTokens.radius.default,
    outline: 'none',

    selectors: {
      '&[data-disabled]': {
        opacity: designTokens.opacity.disabled,
        userSelect: 'none'
      },
      '&[data-focused]::before': {
        boxSizing: 'content-box',
        content: '',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: focusRingSize,
        height: focusRingSize,
        padding: designTokens.spacing.xs050,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: designTokens.color.border.focused,
        borderRadius: designTokens.radius.default,
        transform: 'translate(-50%, -50%)'
      }
    }
  }
]);

export { baseButtonVars, baseButtonStyles };
