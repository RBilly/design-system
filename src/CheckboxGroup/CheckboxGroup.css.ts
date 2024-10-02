import { style } from '@vanilla-extract/css';
import { designTokens } from '../styles/designTokens';
import { reset } from '../styles/reset';

const container = style([
  reset.root,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: designTokens.spacing.s100
  }
]);

export { container };
