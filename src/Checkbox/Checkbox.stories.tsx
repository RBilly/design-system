import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { groupArgTypes } from '../helpers/storybook/arg-utils';
import { Checkbox, type CheckboxProps } from './Checkbox';

const argTypes = groupArgTypes<keyof CheckboxProps>(
  [
    'Props',
    [
      'isIndeterminate',
      'defaultSelected',
      'isSelected',
      'value',
      'isDisabled',
      'isReadOnly',
      'isRequired',
      'isInvalid',
      'autoFocus',
      'name',
      'children',
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
      'aria-details',
      'aria-errormessage'
    ]
  ]
);

const controlArgs = [
  'isReadOnly',
  'isDisabled',
  'isInvalid',
  'isIndeterminate',
  'isSelected',
  'isRequired'
] as const satisfies ReadonlyArray<keyof CheckboxProps>;

const meta = {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes,
  args: {
    isReadOnly: false,
    isDisabled: false,
    isInvalid: false,
    isIndeterminate: false,
    isSelected: false,
    isRequired: false,
    children: 'Label'
  },
  render: (args) => {
    const [{ isSelected }, updateArgs] = useArgs();
    return (
      <Checkbox
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
} satisfies Meta<typeof Checkbox>;

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

export const Indeterminate = {
  parameters: {
    controls: {
      include: controlArgs
    }
  },
  argTypes: {
    isIndeterminate: { control: false }
  },
  args: {
    isIndeterminate: true
  }
} satisfies Story;

export const Invalid = {
  parameters: {
    controls: {
      include: controlArgs
    }
  },
  argTypes: {
    isInvalid: { control: false }
  },
  args: {
    isInvalid: true
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

export const Required = {
  parameters: {
    controls: {
      include: controlArgs
    }
  },
  argTypes: {
    isRequired: { control: false }
  },
  args: {
    isRequired: true
  }
} satisfies Story;
