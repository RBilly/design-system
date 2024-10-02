import {
  TextField as RacTextField,
  type TextFieldProps as RacTextFieldProps
} from 'react-aria-components';
import { classNames } from '../helpers/classNames';
import type { CommonProps } from '../types/CommonProps';
import { container } from './TextField.css';

export type TextFieldProps = Omit<
  RacTextFieldProps,
  | keyof CommonProps
  // TODO: study how to handle validation.
  // Related to https://stljirap.sial.com/browse/UXUI-1452
  | 'validate'
  | 'validationBehavior'
> &
  Partial<CommonProps>;

/**
 * A text field allows a user to enter a plain text value with a keyboard.
 */
export const TextField = ({ className, ...props }: TextFieldProps) => (
  <RacTextField {...props} className={classNames(container, className)} />
);
