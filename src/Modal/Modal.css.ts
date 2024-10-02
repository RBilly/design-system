import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { designTokens } from '../styles/designTokens';
import { reset } from '../styles/reset';

const modalZoomIn = keyframes({
  from: { transform: 'scale(0.8)' }
});

const modalZoomOut = keyframes({
  to: { transform: 'scale(0.8)' }
});

const baseModal = style([
  reset.root,
  {
    backgroundColor: designTokens.color.background.container,
    borderColor: designTokens.color.border.default,
    borderWidth: designTokens.border.default,
    borderRadius: designTokens.radius.modal,
    boxShadow: designTokens.shadow.overlay,
    maxHeight: '700px',
    selectors: {
      '&[data-entering]': {
        animation: `${modalZoomIn} 200ms ease-out`
      },
      '&[data-exiting]': {
        animation: `${modalZoomOut} 150ms ease-in`
      }
    }
  }
]);

export const container = recipe({
  base: [baseModal],
  variants: {
    size: {
      sm: {
        width: '500px'
      },
      md: {
        width: '750px'
      },
      lg: {
        width: '1000px'
      },
      xl: {
        width: '1250px'
      }
    }
  }
});

export const dismissContainer = style({
  position: 'relative'
});

export const dismissButton = style({
  position: 'absolute',
  top: '0.45rem',
  right: '0.45rem'
});
