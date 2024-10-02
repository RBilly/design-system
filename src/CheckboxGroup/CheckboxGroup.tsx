import {
  CheckboxGroup as RacCheckboxGroup,
  type CheckboxGroupProps as RacCheckboxGroupProps
} from 'react-aria-components';
import { classNames } from '../helpers/classNames';
import type { CommonProps } from '../types/CommonProps';
import { container } from './CheckboxGroup.css';

export type CheckboxGroupProps = Omit<
  RacCheckboxGroupProps,
  | keyof CommonProps
  // TODO: study how to handle validation.
  | 'validate'
  | 'validationBehavior'
> &
  CommonProps;

/**
 * A checkbox group allows a user to select multiple items from a list of options.
 */
export const CheckboxGroup = ({ children, className, ...props }: CheckboxGroupProps) => (
  <RacCheckboxGroup {...props} className={classNames(container, className)}>
    {children}
  </RacCheckboxGroup>
);
