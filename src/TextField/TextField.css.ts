import { style } from '@vanilla-extract/css';
import { reset } from '../styles/reset';

const container = style([
  reset.root,
  {
    display: 'flex',
    flexDirection: 'column'
  }
]);

export { container };
