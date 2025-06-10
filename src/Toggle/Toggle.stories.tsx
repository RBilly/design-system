import type { Meta, StoryObj } from '@storybook/react-vite';
import { groupArgTypes } from '../helpers/storybook/arg-utils';
import { LockIcon, PinIcon, PinnedIcon, StarIcon, StarredIcon } from '../icons';
import { Toggle, type ToggleProps } from './Toggle';

const argTypes = groupArgTypes<keyof ToggleProps>(
  [
    'Props',
    [
      'isSelected',
      'defaultSelected',
      'variant',
      'shape',
      'isDisabled',
      'autoFocus',
      'children',
      'className',
      'style',
      'preventFocusOnPress'
    ]
  ],
  [
    'Events',
    [
      'onChange',
      'onPress',
      'onPressStart',
      'onPressEnd',
      'onPressChange',
      'onPressUp',
      'onFocus',
      'onFocusChange',
      'onBlur',
      'onKeyUp',
      'onKeyDown',
      'onHoverStart',
      'onHoverEnd',
      'onHoverChange'
    ]
  ],
  ['Layout', ['slot']],
  [
    'Accessibility',
    [
      'id',
      'excludeFromTabOrder',
      'aria-expanded',
      'aria-haspopup',
      'aria-controls',
      'aria-pressed',
      'aria-label',
      'aria-labelledby',
      'aria-describedby',
      'aria-details'
    ]
  ]
);

const meta = {
  title: 'Components/Inputs/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    ...argTypes,
    children: {
      ...argTypes.children,
      // Not relevant with ReactElement.
      control: false
    }
  }
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: 'Simple label'
  }
} satisfies Story;

/**
 * Render props may also be used as children to alter what elements are rendered based on the current state. <br/>
 * For example, you could render swap an icon depending on the selection state.
 *
 *```jsx
 * <ToggleButton>
 *   {({isSelected}) => (
 *     {isSelected ? <PinnedIcon /> : <PinIcon />}
 *   )}
 * </ToggleButton>
 * ```
 */
export const OutlinedSquare = {
  args: {
    children: ({ isSelected }) => <>{isSelected ? <PinnedIcon /> : <PinIcon />}</>
  }
} satisfies Story;

/**
 * You can set attributes to modify the toggle style
 *
 *```jsx
 * <ToggleButton variant='text' shape='circle' style={{ backgroundColor: 'transparent' }}>
 *   {({isSelected}) => (
 *     {isSelected ? <StarredIcon /> : <StarIcon />}
 *   )}
 * </ToggleButton>
 * ```
 */
export const TextCircle = {
  args: {
    variant: 'text',
    shape: 'circle',
    style: { backgroundColor: 'transparent' },
    children: ({ isSelected }) => <>{isSelected ? <StarredIcon /> : <StarIcon />}</>
  }
} satisfies Story;

export const Disabled = {
  argTypes: {
    isDisabled: { control: false }
  },
  args: {
    isDisabled: true,
    isSelected: true,
    children: <LockIcon />
  }
} satisfies Story;
