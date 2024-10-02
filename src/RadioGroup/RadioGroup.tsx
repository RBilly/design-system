import {
  RadioGroup as RacRadioGroup,
  type RadioGroupProps as RacRadioGroupProps
} from 'react-aria-components';
import { classNames } from '../helpers/classNames';
import type { CommonProps } from '../types/CommonProps';
import { container } from './RadioGroup.css';

export type RadioGroupProps = Omit<
  RacRadioGroupProps,
  | keyof CommonProps
  | 'orientation'
  // TODO: study how to handle validation.
  // Related to https://stljirap.sial.com/browse/UXUI-1452
  | 'validate'
  | 'validationBehavior'
> &
  CommonProps;

/**
 * A radio group allows a user to select a single item from a list of mutually exclusive options.
 */
export const RadioGroup = ({ children, className, ...props }: RadioGroupProps) => (
  <RacRadioGroup {...props} className={classNames(container, className)}>
    {children}
  </RacRadioGroup>
);
