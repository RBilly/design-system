import { style } from '@vanilla-extract/css';
import { designTokens } from '../styles/designTokens';
import { reset } from '../styles/reset';

const container = style([
  reset.root,
  {
    display: 'flex',
    alignItems: 'center',
    font: designTokens.typography.body.medium,
    color: designTokens.color.text.primary,

    selectors: {
      '&[data-disabled]': {
        color: designTokens.color.text.tertiary,
        pointerEvents: 'none'
      },
      '&[data-readonly]': {
        opacity: designTokens.opacity.disabled,
        pointerEvents: 'none'
      }
    }
  }
]);

const boxContainer = style([
  reset.root,
  {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    marginRight: designTokens.spacing.xs050,

    selectors: {
      '&::before': {
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
        borderRadius: 99
      },
      [`${container}[data-hovered] &::before`]: {
        content: '',
        backgroundColor: designTokens.color.background.hovered
      },
      [`${container}[data-focused] &::before`]: {
        content: '',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: designTokens.color.border.focused
      },
      [`${container}[data-pressed] &::before`]: {
        content: '',
        backgroundColor: designTokens.color.background.pressed
      }
    }
  }
]);

const box = style([
  reset.root,
  {
    width: 24,
    height: 24,
    backgroundColor: designTokens.color.background.default,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: designTokens.color.border.selected,
    borderRadius: 99,

    selectors: {
      [`${container}[data-invalid] &`]: {
        borderColor: designTokens.color.accent.danger
      },
      [`${container}[data-selected] &`]: {
        // Needed to override invalid border color.
        borderColor: designTokens.color.border.selected
      },
      [`${container}[data-disabled] &`]: {
        borderColor: designTokens.color.border.disabled
      },
      '&::before': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 14,
        height: 14,
        backgroundColor: designTokens.color.background.brand,
        borderRadius: 99
      },
      [`${container}[data-selected] &::before`]: {
        content: ''
      },
      [`${container}[data-disabled] &::before`]: {
        backgroundColor: designTokens.color.background.containerDarker
      }
    }
  }
]);

export { container, box, boxContainer };
