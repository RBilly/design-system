import type { Meta, StoryObj } from '@storybook/react';
import { groupArgTypes } from '../helpers/storybook/arg-utils';
import { SearchIcon } from '../icons';
import { Button, type ButtonProps } from './Button';

const argTypes = groupArgTypes<keyof ButtonProps>(
  [
    'Props',
    [
      'icon',
      'iconPosition',
      'onAccent',
      'variant',
      'isDisabled',
      'isPending',
      'form',
      'formAction',
      'formEncType',
      'formMethod',
      'formNoValidate',
      'formTarget',
      'name',
      'value',
      'block',
      'autoFocus',
      'type',
      'children',
      'className',
      'style',
      'preventFocusOnPress'
    ]
  ],
  [
    'Events',
    [
      'onPress',
      'onPressStart',
      'onPressEnd',
      'onPressChange',
      'onPressUp',
      'onFocus',
      'onBlur',
      'onFocusChange',
      'onKeyDown',
      'onKeyUp',
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

const controlArgs = [
  'variant',
  'onAccent',
  'isPending',
  'isDisabled'
] as const satisfies ReadonlyArray<keyof ButtonProps>;

const meta = {
  title: 'Components/Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes,
  args: {
    variant: 'text',
    onAccent: false,
    isPending: false,
    isDisabled: false,
    children: 'Button label'
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Text = {
  parameters: {
    controls: {
      include: controlArgs
    }
  },
  argTypes: {
    variant: { control: false }
  },
  args: {
    variant: 'text'
  }
} satisfies Story;

export const Filled = {
  parameters: {
    controls: {
      include: controlArgs
    }
  },
  argTypes: {
    variant: { control: false }
  },
  args: {
    variant: 'filled'
  }
} satisfies Story;

export const Outlined = {
  parameters: {
    controls: {
      include: controlArgs
    }
  },
  argTypes: {
    variant: { control: false }
  },
  args: {
    variant: 'outlined'
  }
} satisfies Story;

export const Icon = {
  parameters: {
    controls: {
      include: [...controlArgs, 'iconPosition']
    }
  },
  args: {
    variant: 'filled',
    icon: <SearchIcon />,
    iconPosition: 'before'
  }
} satisfies Story;
