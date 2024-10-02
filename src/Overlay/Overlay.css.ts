import { keyframes, style } from '@vanilla-extract/css';
import hexToRgba from 'hex-to-rgba';
import { designTokens } from '../styles/designTokens';
import { reset } from '../styles/reset';

const overlayFadeIn = keyframes({
  from: { opacity: 0 }
});

const overlayFadeOut = keyframes({
  to: { opacity: 0 }
});

export const overlay = style([
  reset.root,
  {
    backgroundColor: hexToRgba(designTokens.color.background.overlay, designTokens.opacity.overlay),
    backdropFilter: 'blur(5px)',
    height: '100vh',
    position: 'fixed',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    display: 'flex',
    top: 0,
    left: 0,
    zIndex: 100,
    selectors: {
      '&[data-entering]': {
        animation: `${overlayFadeIn} 200ms ease-out`
      },
      '&[data-exiting]': {
        animation: `${overlayFadeOut} 150ms ease-in`
      }
    }
  }
]);
