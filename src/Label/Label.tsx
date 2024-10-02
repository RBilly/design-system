import { Label as RacLabel, type LabelProps as RacLabelProps } from 'react-aria-components';
import { classNames } from '../helpers/classNames';
import type { CommonProps } from '../types/CommonProps';
import { container } from './Label.css';

export type LabelProps = Omit<RacLabelProps, keyof CommonProps> & CommonProps;

export const Label = ({ className, ...props }: LabelProps) => (
  <RacLabel {...props} className={classNames(container, className)} />
);
