import { style } from '@vanilla-extract/css';
import { designTokens } from '../styles/designTokens';
import { reset } from '../styles/reset';

const BORDER_WIDTH = 2;
const THUMB_INITIAL_SIZE = 28;
const THUMB_INITIAL_POSITION = 3;

// When the parent `box-sizing is set to `border-box`, border size is not included in `100%`.
const focusRingSize = `calc(100% + ${BORDER_WIDTH}px * 2)`;

const track = style([
  reset.root,
  {
    position: 'relative',
    // RAC Switch node is an inline node (label).
    display: 'block',
    width: 62,
    height: 38,
    backgroundColor: designTokens.color.background.default,
    borderWidth: BORDER_WIDTH,
    borderStyle: 'solid',
    borderColor: designTokens.color.icon.disabled,
    borderRadius: designTokens.radius.full,

    selectors: {
      '&[data-selected]': {
        backgroundColor: designTokens.color.background.brand,
        borderColor: designTokens.color.background.brand
      },
      '&[data-disabled], &[data-readonly]': {
        pointerEvents: 'none',
        opacity: designTokens.opacity.disabled
      },
      // Focus ring
      '&[data-focused]::before': {
        // Make node larger than its parent using normal properties (padding, border).
        boxSizing: 'content-box',
        content: '',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: focusRingSize,
        height: focusRingSize,
        padding: designTokens.spacing.xs050,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: designTokens.color.border.focused,
        borderRadius: designTokens.radius.full,
        transform: 'translate(-50%, -50%)'
      }
    }
  }
]);

const thumb = style([
  reset.root,
  {
    position: 'absolute',
    top: THUMB_INITIAL_POSITION,
    left: THUMB_INITIAL_POSITION,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: THUMB_INITIAL_SIZE,
    height: THUMB_INITIAL_SIZE,
    backgroundColor: designTokens.color.icon.disabled,
    borderRadius: designTokens.radius.full,
    transitionProperty: 'margin-left',
    transitionDuration: '250ms',
    color: designTokens.color.icon.onAccent,

    selectors: {
      [`${track}[data-selected] &`]: {
        marginLeft: THUMB_INITIAL_SIZE - THUMB_INITIAL_POSITION,
        backgroundColor: designTokens.color.background.default,
        color: designTokens.color.icon.brand
      },
      [`${track}[data-hovered] &, ${track}[data-pressed] &`]: {
        top: 1,
        left: 1,
        width: 32,
        height: 32
      },
      [`${track}[data-selected][data-hovered] &`]: {
        backgroundColor: designTokens.color.background.hovered
      },
      [`${track}[data-selected][data-pressed] &`]: {
        backgroundColor: designTokens.color.background.pressed
      },
      // Hover/press ring displayed behind the track.
      [`${track}[data-hovered] &::before, ${track}[data-pressed] &::before`]: {
        content: '',
        position: 'absolute',
        zIndex: -1,
        width: 45,
        height: 45,
        borderRadius: designTokens.radius.full
      },
      [`${track}[data-hovered] &::before`]: {
        backgroundColor: designTokens.color.background.hovered
      },
      [`${track}[data-pressed] &::before`]: {
        backgroundColor: designTokens.color.background.pressed
      }
    }
  }
]);

export { thumb, track };
