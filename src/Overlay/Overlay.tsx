import { ModalOverlay, type ModalOverlayProps } from 'react-aria-components';
import type { CommonProps } from '../types/CommonProps';
import { overlay } from './Overlay.css';

export type OverlayProps = Omit<ModalOverlayProps, keyof CommonProps> &
  Pick<CommonProps, 'children'>;

export const Overlay = ({ children, ...props }: OverlayProps) => (
  <ModalOverlay className={overlay} {...props}>
    {children}
  </ModalOverlay>
);
