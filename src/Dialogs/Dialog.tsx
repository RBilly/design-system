import { type ReactNode, useContext, useState } from 'react';
import {
  Heading,
  OverlayTriggerStateContext,
  Dialog as RacDialog,
  type DialogProps as RacDialogProps
} from 'react-aria-components';
import { Button } from '../Button';
import { Modal, type ModalProps } from '../Modal';
import { Overlay, type OverlayProps } from '../Overlay';
import { actions, content, dialog, heading } from './Dialog.css';

export type DialogProps = Omit<RacDialogProps, 'className' | 'style'> &
  Omit<
    OverlayProps,
    | 'children'
    | 'isKeyboardDismissDisabled'
    | 'isDismissable'
    | 'UNSTABLE_portalContainer'
    | 'shouldCloseOnInteractOutside'
    | 'isExiting'
    | 'isEntering'
  > &
  Omit<ModalProps, 'children'>;

/**
 * Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks. <br/>
 * A Dialog is a Popup component displayed in a modal window. They can be used to create lightboxes, notifications, confirmation window, simple or complex forms or any custom content<br/>
 * <strong>Dialogs are purposefully blocking interactions with the rest of the interface, so they need to be used carefully.</strong>
 *
 * <h3>Overview</h3>
 * <ul>
 * <li>Dialogs are displayed on top of everything else and is blocking access to content below.</li>
 * <li>Dialogs disable scrolling background content to provide dialog content scrolls instead.</li>
 * <li>Dialogs can be either triggered by a simple button or programmatically controlled.</li>
 * </ul>
 *
 * <h3>Usage</h3>
 * Dialogs are implemented using a collection of related components:
 * <ul>
 * <li> `<DialogTrigger>` Must contain a button and a dialog. When button is clicked, it opens the dialog.</li>
 * <li> `<Dialog>` Main component that contain the dialog title, content and actions.</li>
 * <li> `<Dialog.Title>` A wrapper used to display an optional title in the Dialog.</li>
 * <li> `<Dialog.Content>` A container for displaying anything as the dialog's content.</li>
 * <li> `<Dialog.Actions>` A container to display and control the label and behavior of the Cancel and Action buttons.</li>
 * </ul>
 */
export const Dialog = ({
  children,
  size = 'md',
  allowDismiss = false,
  role = 'dialog',
  ...props
}: DialogProps) => {
  return (
    <Overlay isKeyboardDismissDisabled={!allowDismiss} {...props}>
      <Modal {...props} size={size} allowDismiss={allowDismiss}>
        <RacDialog role={role} {...props} className={dialog}>
          {children}
        </RacDialog>
      </Modal>
    </Overlay>
  );
};

type DialogTitleProps = {
  children: ReactNode;
};

Dialog.Title = ({ children }: DialogTitleProps) => (
  <Heading slot="title" className={heading}>
    {children}
  </Heading>
);

type DialogContentProps = {
  children: ReactNode;
};

Dialog.Content = ({ children }: DialogContentProps) => <div className={content}>{children}</div>;

type DialogActionsProps = {
  cancelLabel?: string;
  actionLabel?: string;
  onCancel?: () => void | Promise<void>;
  onAction?: () => void | Promise<void>;
  children?: ReactNode;
};

const DefaultActions = ({
  cancelLabel = 'Cancel',
  actionLabel = 'Ok',
  onCancel,
  onAction
}: Omit<DialogActionsProps, 'children'>) => {
  const { close } = useContext(OverlayTriggerStateContext);
  const [isCancelPending, setCancelPending] = useState(false);
  const [isActionPending, setActionPending] = useState(false);

  const handleButton = (setLoading: typeof setActionPending, onClick: typeof onAction) => {
    if (onClick) {
      setLoading(true);
      Promise.resolve(onClick())
        .then(close)
        .finally(() => setLoading(false));
    } else {
      close();
    }
  };

  const handleCancel = () => handleButton(setCancelPending, onCancel);

  const handleAction = () => handleButton(setActionPending, onAction);

  return (
    <>
      <Button
        variant="text"
        onPress={handleCancel}
        isPending={isCancelPending}
        aria-label={cancelLabel}
      >
        {cancelLabel}
      </Button>
      <Button
        variant="filled"
        onPress={handleAction}
        isPending={isActionPending}
        aria-label={actionLabel}
      >
        {actionLabel}
      </Button>
    </>
  );
};

Dialog.Actions = ({ children, ...props }: DialogActionsProps) => (
  <div className={actions}>{children || <DefaultActions {...props} />}</div>
);
