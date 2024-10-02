import { Radio as RacRadio, type RadioProps as RacRadioProps } from 'react-aria-components';
import { classNames } from '../helpers/classNames';
import type { CommonProps } from '../types/CommonProps';
import { box, boxContainer, container } from './Radio.css';

export type RadioProps = Omit<RacRadioProps, keyof CommonProps> & CommonProps;

/**
 * A radio allows a user to select a single item from a list of mutually exclusive options.
 * **It can only be used in a radio group component.**
 */
export const Radio = ({ children, className, ...props }: RadioProps) => (
  <RacRadio {...props} className={classNames(container, className)}>
    <div className={boxContainer}>
      <div className={box} />
    </div>
    {children}
  </RacRadio>
);
