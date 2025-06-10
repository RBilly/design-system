import type { Meta, StoryObj } from '@storybook/react-vite';

import { DialogTrigger, Form } from 'react-aria-components';
import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';
import { TextField } from '../TextField';
import { groupArgTypes } from '../helpers/storybook/arg-utils';
import { PlusIcon } from '../icons';
import { Dialog, type DialogProps } from './Dialog';

const argTypes = groupArgTypes<keyof DialogProps>(
  ['Props', ['size', 'children', 'isOpen', 'onOpenChange', 'allowDismiss', 'defaultOpen']],
  ['Layout', ['slot']],
  [
    'Accessibility',
    ['id', 'role', 'aria-describedby', 'aria-labelledby', 'aria-label', 'aria-details']
  ]
);

const controlArgs = ['size', 'allowDismiss'] as const satisfies ReadonlyArray<keyof DialogProps>;

const meta = {
  component: Dialog,
  title: 'Components/Feedback/Dialog',
  tags: ['autodocs'],
  argTypes,
  args: {
    size: 'md',
    role: 'dialog',
    allowDismiss: false
  },
  render: (args) => (
    <DialogTrigger>
      <Button variant="filled" icon={<PlusIcon />}>
        New User
      </Button>
      <Dialog {...args}>
        <Dialog.Title>Register User</Dialog.Title>
        <Dialog.Content>
          <Form>
            <TextField type="text">
              <Label>Username</Label>
              <Input placeholder="Type here..." />
            </TextField>
            <br />
            <TextField type="email">
              <Label>E-mail</Label>
              <Input placeholder="Type here..." />
            </TextField>
            <br />
            <TextField type="password">
              <Label>Password</Label>
              <Input placeholder="Type here..." />
            </TextField>
          </Form>
        </Dialog.Content>
        <Dialog.Actions actionLabel="Submit" />
      </Dialog>
    </DialogTrigger>
  )
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Dialog is a very flexible component that can be used in multiple ways for different purposes. <br/>
 * This is a very basic usage to give an idea of the structure:
 *
 * ```jsx
 *  <DialogTrigger>
 *    <Button>Trigger button</Button>
 *    <Dialog>
 *      <Dialog.Title>Title</Dialog.Title>
 *      <Dialog.Content>Some content</Dialog.Content>
 *      <Dialog.Actions onAction={() => alert('action clicked')}/>
 *    </Dialog>
 *  </DialogTrigger>
 * ```
 * Using the `<DialogTrigger>` component is the simplest way to open a Dialog. <br/>
 * But sometimes you need to programmatically manage the dialog opening from a function result or an event. <br/>
 * See how such case can be handled:
 *
 * ```jsx
 * const SomeComponent = () => {
 *   const [isOpen, setOpen] = useState(false);
 *   const [content, setContent] = useState('');
 *
 *   fetchDialogContent().then((result) => {
 *     setContent(result);
 *     setOpen(true);
 *   });
 *
 *   return (
 *     // onOpenChange NEEDS to be provided with a function to modify the value of `isOpen`.
 *     // Else the dialog cannot be closed.
 *     <Dialog isOpen={isOpen} onOpenChange={setOpen}>
 *       <Dialog.Title>Fetched dialog content</Dialog.Title>
 *       <Dialog.Content>{content}</Dialog.Content>
 *       <Dialog.Actions/>
 *     </Dialog>
 *   );
 * }
 * ```
 */
export const SimpleExample = {
  render: () => {
    return (
      <DialogTrigger>
        <Button>Trigger button</Button>
        <Dialog>
          <Dialog.Title>Title</Dialog.Title>
          <Dialog.Content>Some content</Dialog.Content>
          <Dialog.Actions onAction={() => alert('action clicked')} />
        </Dialog>
      </DialogTrigger>
    );
  }
} satisfies Story;

/**
 * Here is a form example with a bit more behavior customization.<br/>
 * For example, you can choose between a set of sizes that define the width of the dialog.
 */
export const FormExample = {
  args: {
    ...meta.args,
    size: 'sm'
  }
} satisfies Story;

/**
 * Dialog are used to get the full attention of the user on the content of the dialog.<br/>
 * It is not recommended to allow the user to dismiss the dialog through a cross icon
 * or the escape key, because it is a distraction and a temptation
 * for the user to ignore the dialog content.<br/>
 * Thus, default behavior does not allow to dismiss the dialog. <br/>
 * But there is cases where it may be intentional to be able to dismiss the dialog.<br/>
 * For such case you only need to pass the `allowDismiss` property.
 */
export const Dismiss = {
  parameters: {
    controls: {
      include: controlArgs
    }
  },
  args: {
    ...meta.args,
    allowDismiss: true
  },
  argTypes: {
    allowDismiss: { control: false }
  }
} satisfies Story;

/**
 * Use the `<Dialog.Actions>` component to customize the dialog buttons. <br/>
 * By default, it provides a cancel button labelled "Cancel" and an action button labelled "Ok". <br/>
 * When no behavior is specified, both button close the dialog. <br/>
 * In some cases it can be useful to use an asynchronous function to handle the click on one of those button. <br/>
 * For example, this pattern can be used when submitting a form.
 *
 * ```jsx
 * <DialogTrigger>
 *   <Button>Open Async Dialog</Button>
 *   <Dialog {...args}>
 *     <Dialog.Title>Register User</Dialog.Title>
 *     <Dialog.Content>
 *       <Form>
 *         <TextField type="text">
 *           <Label>Username</Label>
 *           <Input placeholder="Type here..." />
 *         </TextField>
 *         <br />
 *         <TextField type="email">
 *           <Label>E-mail</Label>
 *           <Input placeholder="Type here..." />
 *         </TextField>
 *         <br />
 *         <TextField type="password">
 *           <Label>Password</Label>
 *           <Input placeholder="Type here..." />
 *         </TextField>
 *       </Form>
 *     </Dialog.Content>
 *     <Dialog.Actions
 *       onCancel={() => console.log('user registration cancelled')}
 *       cancelLabel="Custom Cancel"
 *       onAction={() => new Promise((resolve) => setTimeout(resolve, 2000))}
 *       actionLabel="Async Submit"
 *     />
 *   </Dialog>
 * </DialogTrigger>
 * ```
 */
export const AsyncLogic = {
  parameters: {
    controls: {
      include: controlArgs
    }
  },
  render: (args) => (
    <DialogTrigger>
      <Button>Open Async Dialog</Button>
      <Dialog {...args}>
        <Dialog.Title>Register User</Dialog.Title>
        <Dialog.Content>
          <Form>
            <TextField type="text">
              <Label>Username</Label>
              <Input placeholder="Type here..." />
            </TextField>
            <br />
            <TextField type="email">
              <Label>E-mail</Label>
              <Input placeholder="Type here..." />
            </TextField>
            <br />
            <TextField type="password">
              <Label>Password</Label>
              <Input placeholder="Type here..." />
            </TextField>
          </Form>
        </Dialog.Content>
        <Dialog.Actions
          cancelLabel="Custom Cancel"
          onAction={() => new Promise((resolve) => setTimeout(resolve, 2000))}
          actionLabel="Async Submit"
        />
      </Dialog>
    </DialogTrigger>
  )
} satisfies Story;

/**
 * Common use cases can be handled without the need of advanced customization of action buttons. <br/>
 * But if the need arises this can be done easily. <br/>
 * Any Component passed as child of the `<Dialog.Actions>` component will override the default buttons. <br/>
 * It also means that the dialog won't close automatically. <br/>
 * To do that there is two possibilities.<br/>
 * Either you inject the `close` function to your Dialog children by wrapping them in a function.
 *
 * ``` jsx
 * <Dialog>
 *   {({ close }) => (
 *     <>
 *       <Dialog.Title>Title</Dialog.Title>
 *       <Dialog.Content>Some content</Dialog.Content>
 *       <Dialog.Actions>
 *         <Button onPress={() => handleClose(close)}>Some button</Button>
 *       </Dialog.Actions>
 *     </>
 *   )}
 * </Dialog>
 * ```
 * Or you can use the provided state context.
 *
 * ```jsx
 * const CustomActions = () => {
 *   const {close} = useContext(DialogStateContext);
 *   const handleAction = () => {
 *     // do some stuff
 *     close();
 *   }
 *   return <Button onPress={handleAction}>Some Action</Button>
 * }
 *
 * const MyCustomDialog = ({children}) => (
 *   <Dialog>
 *     {children}
 *     <Dialog.Actions>
 *       <CustomActions/>
 *     </Dialog.Actions>
 *   </Dialog>
 * )
 * ```
 */
export const CustomActions = {
  parameters: {
    controls: {
      include: controlArgs
    }
  },
  render: (args) => (
    <DialogTrigger>
      <Button>Custom Action Dialog</Button>
      <Dialog {...args}>
        {({ close }) => (
          <>
            <Dialog.Title>Custom Actions</Dialog.Title>
            <Dialog.Content>Some silly dialog with multiple actions</Dialog.Content>
            <Dialog.Actions>
              <Button variant="text" onPress={close}>
                Never
              </Button>
              <Button variant="outlined" onPress={close}>
                Maybe
              </Button>
              <Button variant="filled" onPress={close}>
                Yes
              </Button>
            </Dialog.Actions>
          </>
        )}
      </Dialog>
    </DialogTrigger>
  )
} satisfies Story;
