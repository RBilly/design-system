import type { Meta, StoryObj } from '@storybook/react';

import { DialogTrigger } from 'react-aria-components';
import { Button } from '../Button';
import { groupArgTypes } from '../helpers/storybook/arg-utils';
import { AlertDialog, type AlertDialogProps } from './AlertDialog';

const argTypes = groupArgTypes<keyof AlertDialogProps>(
  [
    'Props',
    [
      'title',
      'size',
      'children',
      'onClose',
      'closeLabel',
      'isOpen',
      'onOpenChange',
      'allowDismiss',
      'defaultOpen'
    ]
  ],
  ['Layout', ['slot']],
  [
    'Accessibility',
    ['id', 'role', 'aria-describedby', 'aria-labelledby', 'aria-label', 'aria-details']
  ]
);

const meta = {
  component: AlertDialog,
  title: 'Components/Feedback/AlertDialog',
  tags: ['autodocs'],
  argTypes,
  args: {
    size: 'sm',
    role: 'alertdialog',
    title: '',
    children: undefined
  },
  render: (args) => (
    <DialogTrigger>
      <Button variant="filled">Trigger Alert</Button>
      <AlertDialog {...args}>This dialog is here to show an important message.</AlertDialog>
    </DialogTrigger>
  )
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Alerts Dialog are urgent interruptions, requiring acknowledgement, that inform the user about a situation.<br/>
 * Most alerts don't need titles. Title should avoid apologies, ambiguity or questions.<br/>
 * AlertDialog component is derived from the Dialog Component. <br/>
 * It provides a much easier api to use for the single purpose of sharing a very important information
 * that requires acknowledgement from the user.<br/>
 * Example:
 *
 * ```jsx
 * <DialogTrigger>
 *   <Button>Alert Dialog</Button>
 *   <AlertDialog>An important message !</AlertDialog>
 * </DialogTrigger>
 * ```
 * The AlertDialog api expose the following properties:
 * <ul>
 *   <li>"title": To set an optional title.</li>
 *   <li>"onClose": Callback function called when the user click on the "ok" button</li>
 *   <li>"closeLabel": Set the label of close button. Default is "Ok" </li>
 * </ul>
 *
 * The AlertDialog api still allow for some behavior customization from the Dialog component:
 * <ul>
 *   <li>"size": choose from the set of size. Default is "sm".</li>
 *   <li>"allowDismiss": add the cross icon and support for escape key to close the dialog.</li>
 *   <li>"isOpen" and "onOpenChange": To control programmatically the opening of the alert.</li>
 * </ul>
 * Excepted for the more limited customization of the dialog actions (only one button),
 * the AlertDialog is identical to the Dialog component and has the same capabilities.
 *
 */
export const Default = {
  argTypes: {
    ...argTypes,
    isOpen: { control: false }
  }
} satisfies Story;
