import { useContext } from 'react';
import { OverlayTriggerStateContext, Modal as RacModal } from 'react-aria-components';
import { ToolButton } from '../ToolButton';
import { CrossIcon } from '../icons';
import type { CommonProps } from '../types/CommonProps';
import { container, dismissButton, dismissContainer } from './Modal.css';

export type ModalProps = Pick<CommonProps, 'children'> & {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  allowDismiss?: boolean;
};

const DismissButton = () => {
  const state = useContext(OverlayTriggerStateContext);
  return (
    <div className={dismissContainer}>
      <ToolButton
        variant="text"
        icon={<CrossIcon size="medium" />}
        onPress={state?.close}
        className={dismissButton}
      />
    </div>
  );
};

/**
 * A modal is an overlay element which blocks interaction with elements outside it.
 */
export const Modal = ({ children, size = 'md', allowDismiss, ...props }: ModalProps) => (
  <RacModal className={container({ size })} {...props}>
    {allowDismiss && <DismissButton />}
    {children}
  </RacModal>
);
