import { style } from '@vanilla-extract/css';
import { textFieldContainer } from '../TextField';
import { designTokens } from '../styles/designTokens';
import { reset } from '../styles/reset';

const BORDER_WIDTH = 1;

const container = style([
  reset.input,
  {
    selectors: {
      [`${textFieldContainer} &`]: {
        padding: `calc(${designTokens.spacing.s150} - ${BORDER_WIDTH}px)`,
        backgroundColor: designTokens.color.background.container,
        borderWidth: BORDER_WIDTH,
        borderStyle: 'solid',
        borderColor: designTokens.color.border.default,
        borderRadius: designTokens.radius.default,
        font: designTokens.typography.body.medium,
        color: designTokens.color.text.primary,
        outline: 'none'
      },
      [`${textFieldContainer} &::placeholder`]: {
        color: designTokens.color.text.tertiary
      },
      [`${textFieldContainer} &[data-focused]`]: {
        borderColor: designTokens.color.border.focused
      },
      [`${textFieldContainer} &[data-invalid]`]: {
        borderColor: designTokens.color.accent.danger
      },
      [`${textFieldContainer} &[data-disabled]`]: {
        opacity: designTokens.opacity.disabled,
        borderColor: designTokens.color.border.disabled,
        color: designTokens.color.text.tertiary,
        pointerEvents: 'none'
      }
    }
  }
]);

export { container };
