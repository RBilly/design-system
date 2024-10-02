import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
import { groupArgTypes } from '../helpers/storybook/arg-utils';
import { Switch, type SwitchProps } from './Switch';

const argTypes = groupArgTypes<keyof SwitchProps>(
  [
    'Props',
    [
      'defaultSelected',
      'isSelected',
      'value',
      'isDisabled',
      'isReadOnly',
      'autoFocus',
      'name',
      'className',
      'style',
      'inputRef'
    ]
  ],
  [
    'Events',
    [
      'onChange',
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
      'aria-controls',
      'aria-label',
      'aria-labelledby',
      'aria-describedby',
      'aria-details'
    ]
  ]
);

const controlArgs = ['isSelected', 'isDisabled', 'isReadOnly'] as const satisfies ReadonlyArray<
  keyof SwitchProps
>;

const meta = {
  title: 'Components/Inputs/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes,
  args: {
    isSelected: false,
    isDisabled: false,
    isReadOnly: false
  },
  render: (args) => {
    const [{ isSelected }, updateArgs] = useArgs();
    return (
      <Switch
        {...args}
        onChange={() => {
          // By default, component is uncontrolled.
          // Only update control value if component is controlled.
          if (isSelected !== undefined) {
            updateArgs({ isSelected: !isSelected });
          }
        }}
      />
    );
  }
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Selected = {
  parameters: {
    controls: {
      include: controlArgs
    }
  },
  argTypes: {
    isSelected: { control: false }
  },
  args: {
    isSelected: true
  }
} satisfies Story;

export const Disabled = {
  parameters: {
    controls: {
      include: controlArgs
    }
  },
  argTypes: {
    isDisabled: { control: false }
  },
  args: {
    isDisabled: true
  }
} satisfies Story;

export const ReadOnly = {
  parameters: {
    controls: {
      include: controlArgs
    }
  },
  argTypes: {
    isReadOnly: { control: false }
  },
  args: {
    isSelected: true,
    isReadOnly: true
  }
} satisfies Story;
