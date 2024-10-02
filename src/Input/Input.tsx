import { Input as RacInput, type InputProps as RacInputProps } from 'react-aria-components';
import { classNames } from '../helpers/classNames';
import type { CommonProps } from '../types/CommonProps';
import { container } from './Input.css';

export type InputProps = Omit<RacInputProps, keyof CommonProps> & Omit<CommonProps, 'children'>;

export const Input = ({ className, ...props }: InputProps) => (
  <RacInput {...props} className={classNames(container, className)} />
);
