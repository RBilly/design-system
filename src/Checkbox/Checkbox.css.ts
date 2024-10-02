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
      },
      '&[data-required]::after': {
        content: '*',
        marginLeft: designTokens.spacing.xs025,
        color: designTokens.color.accent.danger
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
    borderRadius: 4,

    selectors: {
      [`${container}[data-invalid] &`]: {
        borderColor: designTokens.color.accent.danger
      },
      [`${container}[data-selected] &, ${container}[data-indeterminate] &`]: {
        backgroundColor: designTokens.color.background.brand,
        // Needed to override invalid border color.
        borderColor: designTokens.color.border.selected
      },
      [`${container}[data-disabled] &`]: {
        opacity: designTokens.opacity.disabled,
        backgroundColor: designTokens.color.background.default,
        borderColor: designTokens.color.border.disabled
      }
    }
  }
]);

const icon = style([
  reset.root,
  {
    display: 'none',
    fill: designTokens.color.icon.onAccent,
    selectors: {
      [`${container}[data-disabled] &, ${container}[data-readonly] &`]: {
        fill: designTokens.color.icon.disabled
      }
    }
  }
]);

const selectedIcon = style([
  icon,
  {
    selectors: {
      [`${container}[data-selected] &`]: {
        display: 'block'
      }
    }
  }
]);

const indeterminateIcon = style([
  icon,
  {
    selectors: {
      [`${container}[data-indeterminate] &`]: {
        display: 'block'
      }
    }
  }
]);

export { container, boxContainer, box, selectedIcon, indeterminateIcon };
