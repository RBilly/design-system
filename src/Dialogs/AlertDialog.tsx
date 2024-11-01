import { type ReactNode, useState } from 'react';
import { Button } from '../Button';
import { Dialog, type DialogProps } from './Dialog';

type AlertProps = {
  /** Children of the dialog */
  children: ReactNode;
  /** Provide a title to the dialog window (Optional) */
  title?: ReactNode;
  /** Callback function to be called before closing the dialog (Optional) */
  onClose?: () => void | Promise<void>;
  /** Customize the label of the close button */
  closeLabel?: ReactNode;
};

export type AlertDialogProps = Omit<DialogProps, 'children'> & AlertProps;

export const AlertDialog = ({
  title,
  children,
  size = 'sm',
  onClose,
  closeLabel,
  ...props
}: AlertDialogProps) => {
  const [isPending, setPending] = useState(false);

  const handleClose = (close: () => void) => {
    if (onClose) {
      setPending(true);
      Promise.resolve(onClose())
        .then(close)
        .finally(() => setPending(false));
    } else {
      close();
    }
  };

  return (
    <Dialog role="alertdialog" size={size} {...props}>
      {({ close }) => (
        <>
          {title && <Dialog.Title>{title}</Dialog.Title>}
          <Dialog.Content>{children}</Dialog.Content>
          <Dialog.Actions>
            <Button variant="filled" onPress={() => handleClose(close)} isPending={isPending}>
              {closeLabel || 'Ok'}
            </Button>
          </Dialog.Actions>
        </>
      )}
    </Dialog>
  );
};
