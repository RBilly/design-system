import { createVar, keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import hexToRgba from 'hex-to-rgba';
import { designTokens } from '../styles/designTokens';
import { reset } from '../styles/reset';

export const firstChildHeight = createVar();
const translateYDirection = createVar();

const baseStackStyle = style({
  selectors: {
    '&:not(:nth-child(-n+3))': {
      opacity: 0,
      transition: 'opacity 300ms',
      overflow: 'hidden',
      color: 'transparent',
      pointerEvents: 'none',
      height: firstChildHeight
    },
    '&:nth-child(3)': {
      position: 'absolute',
      transform: `translateY(calc(${translateYDirection}*16px)) scaleX(0.9)`,
      backdropFilter: 'blur(10px)',
      opacity: 0.8,
      zIndex: 1,
      height: firstChildHeight
    },
    '&:nth-child(2)': {
      position: 'absolute',
      transform: `translateY(calc(${translateYDirection}*8px)) scaleX(0.95)`,
      backdropFilter: 'blur(10px)',
      opacity: 0.9,
      zIndex: 2,
      height: firstChildHeight
    },
    '&:nth-child(1)': {
      position: 'absolute',
      zIndex: 3
    }
  }
});

export const stackStyle = recipe({
  base: {
    display: 'flex',
    transition: 'all 300ms, backdrop-filter 0s'
  },
  variants: {
    stacked: {
      true: [baseStackStyle]
    },
    position: {
      topLeft: {
        vars: { [translateYDirection]: '1' }
      },
      topRight: {
        vars: { [translateYDirection]: '1' }
      },
      bottomLeft: {
        vars: { [translateYDirection]: '-1' }
      },
      bottomRight: {
        vars: { [translateYDirection]: '-1' }
      }
    }
  }
});

const slideIn = keyframes({
  from: { opacity: 0, transform: 'translateX(100%)' }
});

const slideInFromBottom = keyframes({
  from: { opacity: 0, transform: 'translateY(100%)' }
});

export const toastStyle = style([
  reset.root,
  {
    backgroundColor: designTokens.color.background.default,
    borderColor: designTokens.color.border.light,
    borderWidth: designTokens.border.default,
    borderRadius: designTokens.radius.modal,
    boxShadow: designTokens.shadow.overlay,
    width: '380px',
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: designTokens.spacing.s100,
    padding: designTokens.spacing.m200,
    alignItems: 'center',
    flexShrink: 0,

    selectors: {
      '&[data-animation=entering]': {
        animation: `${slideIn} 300ms ease-out`
      },
      '&[data-animation=queued]': {
        animation: `${slideInFromBottom} 250ms ease-out`
      }
    }
  }
]);

export const contentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: 'auto',
  justifyContent: 'space-between',
  gap: designTokens.spacing.xs050,
  overflow: 'hidden',
  height: '-webkit-fill-available'
});

export const titleStyle = recipe({
  base: {
    font: designTokens.typography.label.large,
    color: designTokens.color.text.primary,
    display: 'flex',
    flexDirection: 'row',
    gap: designTokens.spacing.xs050
  },
  variants: {
    type: {
      success: {
        color: designTokens.color.accent.success
      },
      info: {
        color: designTokens.color.accent.primary
      },
      warning: {
        color: designTokens.color.accent.warning
      },
      error: {
        color: designTokens.color.accent.danger
      }
    }
  }
});

export const descriptionStyle = style({
  font: designTokens.typography.body.small,
  color: designTokens.color.text.secondary,
  paddingLeft: designTokens.spacing.xs050
});

export const dismissStyle = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  flexShrink: 0
});

export const progressStyle = recipe({
  base: {
    appearance: 'none',
    height: '4px',
    display: 'block',
    inlineSize: '100%',
    position: 'absolute',
    bottom: '-1px',
    left: 0,
    selectors: {
      '&::-webkit-progress-bar': {
        backgroundColor: 'transparent'
      },
      '&::-webkit-progress-value': {
        borderTopRightRadius: designTokens.radius.default,
        borderBottomRightRadius: designTokens.radius.default,
        borderBottomLeftRadius: '8px',
        backgroundColor: 'white',
        backgroundImage: `linear-gradient(90deg, ${hexToRgba(designTokens.color.text.primary, 0.3)}, ${designTokens.color.text.primary})`
      }
    }
  },
  variants: {
    hidden: {
      true: {
        visibility: 'hidden'
      },
      false: {
        visibility: 'visible'
      }
    },
    type: {
      success: {
        selectors: {
          '&::-webkit-progress-value': {
            backgroundImage: `linear-gradient(90deg, ${hexToRgba(designTokens.color.accent.success, 0.3)}, ${designTokens.color.accent.success})`
          }
        }
      },
      info: {
        selectors: {
          '&::-webkit-progress-value': {
            backgroundImage: `linear-gradient(90deg, ${hexToRgba(designTokens.color.accent.primary, 0.3)}, ${designTokens.color.accent.primary})`
          }
        }
      },
      warning: {
        selectors: {
          '&::-webkit-progress-value': {
            backgroundImage: `linear-gradient(90deg, ${hexToRgba(designTokens.color.accent.warning, 0.3)}, ${designTokens.color.accent.warning})`
          }
        }
      },
      error: {
        selectors: {
          '&::-webkit-progress-value': {
            backgroundImage: `linear-gradient(90deg, ${hexToRgba(designTokens.color.accent.danger, 0.3)}, ${designTokens.color.accent.danger})`
          }
        }
      }
    }
  }
});
