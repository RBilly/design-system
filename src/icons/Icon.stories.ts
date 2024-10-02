import type { Meta, StoryObj } from '@storybook/react';
import { groupArgTypes } from '../helpers/storybook/arg-utils';
import type { IconProps } from './IconProps';
import { SettingsIcon } from './SettingsIcon';

const argTypes = groupArgTypes<keyof IconProps>(['Props', ['size', 'className', 'style']]);

const meta = {
  title: 'Components/Data Display/Icon',
  component: SettingsIcon,
  argTypes,
  args: {
    size: 'medium'
  },
  tags: ['autodocs']
} satisfies Meta<typeof SettingsIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Small = {
  argTypes: {
    size: { control: false }
  },
  args: {
    size: 'small'
  }
} satisfies Story;

export const Large = {
  argTypes: {
    size: { control: false }
  },
  args: {
    size: 'large'
  }
} satisfies Story;

export const ExtraLarge = {
  argTypes: {
    size: { control: false }
  },
  args: {
    size: 'xlarge'
  }
} satisfies Story;
