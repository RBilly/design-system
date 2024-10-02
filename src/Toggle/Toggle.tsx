import { ToggleButton, type ToggleButtonProps } from 'react-aria-components';
import { classNames } from '../helpers/classNames';
import type { CommonProps } from '../types/CommonProps';
import { container } from './Toggle.css';

export type ToggleProps = Omit<ToggleButtonProps, 'className' | 'style' | 'type'> &
  Omit<CommonProps, 'children'> & {
    /** The variant to display. */
    variant?: 'outlined' | 'text';
    /** The shape to display. */
    shape?: 'square' | 'circle';
  };

/**
 * A toggle button allows a user to toggle a selection on or off, for example switching between two states or modes.
 */
export const Toggle = ({
  className,
  variant = 'outlined',
  shape = 'square',
  ...props
}: ToggleProps) => (
  <ToggleButton {...props} className={classNames(container({ variant, shape }), className)} />
);
