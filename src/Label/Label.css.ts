import { style } from '@vanilla-extract/css';
import { textFieldContainer } from '../TextField';
import { designTokens } from '../styles/designTokens';
import { reset } from '../styles/reset';

const container = style([
  reset.label,
  {
    selectors: {
      [`${textFieldContainer} &`]: {
        marginBottom: designTokens.spacing.s100,
        font: designTokens.typography.body.xs,
        color: designTokens.color.text.secondary,
        textTransform: 'uppercase'
      },
      [`${textFieldContainer}[data-disabled] &`]: {
        color: designTokens.color.text.tertiary,
        pointerEvents: 'none'
      }
    }
  }
]);

export { container };
