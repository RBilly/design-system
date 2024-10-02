import { style } from '@vanilla-extract/css';
import { designTokens } from '../styles/designTokens';
import { reset } from '../styles/reset';

export const dialog = style([
  reset.root,
  {
    font: designTokens.typography.body.medium,
    padding: '44px',
    maxHeight: '700px',
    boxSizing: 'border-box',
    overflow: 'auto',
    outline: 'none',
    display: 'flex',
    gap: designTokens.spacing.l400,
    flexDirection: 'column'
  }
]);

export const content = style({
  overflowY: 'auto'
});

export const heading = style({
  marginBlock: 'auto'
});

export const actions = style({
  display: 'flex',
  gap: designTokens.spacing.m200,
  justifyContent: 'flex-end'
});
