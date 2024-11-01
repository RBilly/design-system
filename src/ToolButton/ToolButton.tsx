import type { ReactElement } from 'react';
import { Button, type ButtonProps } from 'react-aria-components';
import { classNames } from '../helpers/classNames';
import type { CommonProps } from '../types/CommonProps';
import { container } from './ToolButton.css';

export type ToolButtonProps = Omit<
  ButtonProps,
  | keyof CommonProps
  // This component should not be used in a form element.
  | 'form'
  | 'formAction'
  | 'formEncType'
  | 'formMethod'
  | 'formNoValidate'
  | 'formTarget'
  | 'name'
  | 'value'
  | 'type'
  | 'isPending'
> &
  Omit<CommonProps, 'children'> & {
    /** The icon to display. */
    icon: ReactElement;
    /** The label to display. */
    label?: string;
    /** The variant to display. */
    variant?: 'outlined' | 'text';
  };

/**
 * A tool button allows a user to perform an action outside a form element.
 */
export const ToolButton = ({
  className,
  icon,
  label,
  variant = 'outlined',
  ...props
}: ToolButtonProps) => (
  <Button {...props} className={classNames(container({ variant }), className)}>
    {icon}
    {label}
  </Button>
);
