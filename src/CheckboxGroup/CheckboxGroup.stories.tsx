import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../Checkbox';
import { groupArgTypes } from '../helpers/storybook/arg-utils';
import { CheckboxGroup, type CheckboxGroupProps } from './CheckboxGroup';

const argTypes = groupArgTypes<keyof CheckboxGroupProps>(
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
  ['Events', ['onChange', 'onFocus', 'onFocusChange', 'onBlur']],
  ['Layout', ['slot']],
  [
    'Accessibility',
    ['id', 'aria-label', 'aria-labelledby', 'aria-describedby', 'aria-details', 'aria-errormessage']
  ]
);

const controlArgs = ['isDisabled', 'isInvalid', 'isReadOnly'] as const satisfies ReadonlyArray<
  keyof CheckboxGroupProps
>;

const meta = {
  title: 'Components/Inputs/CheckboxGroup',
  component: CheckboxGroup,
  // @ts-ignore see https://github.com/storybookjs/storybook/issues/23170
  subcomponents: { Checkbox },
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
        <Checkbox value="foo">Foo</Checkbox>
        <Checkbox value="bar">Bar</Checkbox>
        <Checkbox value="baz">Baz</Checkbox>
      </>
    ),
    // No visible label. Provide `aria-label` for accessibility sake.
    'aria-label': 'Foo bar',
    defaultValue: ['bar'],
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false
  }
} satisfies Meta<typeof CheckboxGroup>;

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
    defaultValue: [],
    isInvalid: true
  },
  render: ({ children, ...args }) => {
    const [, updateArgs] = useArgs();
    return (
      <CheckboxGroup {...args} onChange={(value) => updateArgs({ isInvalid: !value.length })}>
        {children}
      </CheckboxGroup>
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
