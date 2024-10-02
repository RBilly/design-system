import type { Meta, StoryObj } from '@storybook/react';
import { groupArgTypes } from '../helpers/storybook/arg-utils';
import { CrossIcon, PlusIcon, ViewGridIcon } from '../icons';
import { ToolButton, type ToolButtonProps } from './ToolButton';

const argTypes = groupArgTypes<keyof ToolButtonProps>(
  ['Props', ['icon', 'label', 'variant', 'isDisabled', 'autoFocus', 'className', 'style']],
  [
    'Events',
    [
      'onHoverChange',
      'onHoverStart',
      'onHoverEnd',
      'onPress',
      'onPressStart',
      'onPressEnd',
      'onPressChange',
      'onPressUp',
      'onFocus',
      'onBlur',
      'onFocusChange',
      'onKeyDown',
      'onKeyUp'
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
  title: 'Components/Inputs/ToolButton',
  component: ToolButton,
  tags: ['autodocs'],
  argTypes: {
    ...argTypes,
    icon: {
      ...argTypes.icon,
      // Not relevant with ReactElement.
      control: false
    }
  },
  args: {
    icon: <PlusIcon />
  }
} satisfies Meta<typeof ToolButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Close = {
  argTypes: {
    variant: { control: false }
  },
  args: {
    icon: <CrossIcon />,
    variant: 'text'
  }
} satisfies Story;

export const WithLabel = {
  args: {
    icon: <ViewGridIcon />,
    label: 'View'
  }
} satisfies Story;

export const Disabled = {
  argTypes: {
    isDisabled: { control: false }
  },
  args: {
    isDisabled: true
  }
} satisfies Story;
