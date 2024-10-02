import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Radio } from '../Radio';
import { groupArgTypes } from '../helpers/storybook/arg-utils';
import { RadioGroup, type RadioGroupProps } from './RadioGroup';

const argTypes = groupArgTypes<keyof RadioGroupProps>(
  [
    'Props',
    [
      'value',
      'defaultValue',
      'isDisabled',
      'isReadOnly',
      'name',
      'isRequired',
      'isInvalid',
      'children',
      'className',
      'style'
    ]
  ],
  ['Events', ['onChange', 'onFocus', 'onBlur', 'onFocusChange']],
  ['Layout', ['slot']],
  [
    'Accessibility',
    ['id', 'aria-label', 'aria-labelledby', 'aria-describedby', 'aria-details', 'aria-errormessage']
  ]
);

const controlArgs = ['isDisabled', 'isInvalid', 'isReadOnly'] as const satisfies ReadonlyArray<
  keyof RadioGroupProps
>;

const meta = {
  title: 'Components/Inputs/RadioGroup',
  component: RadioGroup,
  // @ts-ignore see https://github.com/storybookjs/storybook/issues/23170
  subcomponents: { Radio },
  tags: ['autodocs'],
  argTypes: {
    ...argTypes,
    children: {
      ...argTypes.children,
      // Not relevant with ReactNode.
      control: false
    }
  },
  args: {
    children: (
      <>
        <Radio value="foo">Foo</Radio>
        <Radio value="bar">Bar</Radio>
        <Radio value="baz">Baz</Radio>
      </>
    ),
    // No visible label. Provide `aria-label` for accessibility sake.
    'aria-label': 'Foo bar',
    defaultValue: 'bar',
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false
  }
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

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
    defaultValue: undefined,
    isInvalid: true
  },
  render: ({ children, ...args }) => {
    // Use React state rather than args to make the state not persistent during user browsing.
    const [isInvalid, setIsInvalid] = useState(args.isInvalid);
    return (
      <RadioGroup
        {...args}
        isInvalid={isInvalid}
        // When the user clicks on a radio button, the group is no longer invalid.
        onChange={(value) => setIsInvalid(!value.length)}
      >
        {children}
      </RadioGroup>
    );
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
    isReadOnly: true
  }
} satisfies Story;
