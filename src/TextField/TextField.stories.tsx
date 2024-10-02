import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../Input';
import { Label } from '../Label';
import { groupArgTypes } from '../helpers/storybook/arg-utils';
import { TextField, type TextFieldProps } from './TextField';

const argTypes = groupArgTypes<keyof TextFieldProps>(
  [
    'Props',
    [
      'isInvalid',
      'isDisabled',
      'isReadOnly',
      'isRequired',
      'autoFocus',
      'value',
      'defaultValue',
      'autoComplete',
      'maxLength',
      'minLength',
      'pattern',
      'type',
      'inputMode',
      'name',
      'children',
      'className',
      'style'
    ]
  ],
  [
    'Events',
    [
      'onFocus',
      'onBlur',
      'onFocusChange',
      'onKeyDown',
      'onKeyUp',
      'onChange',
      'onCopy',
      'onCut',
      'onPaste',
      'onCompositionStart',
      'onCompositionEnd',
      'onCompositionUpdate',
      'onSelect',
      'onBeforeInput',
      'onInput'
    ]
  ],
  ['Layout', ['slot']],
  [
    'Accessibility',
    [
      'id',
      'excludeFromTabOrder',
      'aria-activedescendant',
      'aria-autocomplete',
      'aria-haspopup',
      'aria-label',
      'aria-labelledby',
      'aria-describedby',
      'aria-details',
      'aria-errormessage'
    ]
  ]
);

const meta = {
  title: 'Components/Inputs/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes,
  parameters: {
    // Logged actions slow down the application.
    actions: {
      disable: true
    }
  },
  render: (args) => (
    <TextField {...args}>
      <Label>Label</Label>
      <Input placeholder="Type here..." />
    </TextField>
  )
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Disabled = {
  argTypes: {
    isDisabled: { control: false },
    isInvalid: { control: false },
    isReadOnly: { control: false }
  },
  args: {
    isDisabled: true
  }
} satisfies Story;

export const Invalid = {
  argTypes: {
    isInvalid: { control: false }
  },
  args: {
    isInvalid: true
  }
} satisfies Story;
