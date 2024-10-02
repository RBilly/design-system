import { Switch as RacSwitch, type SwitchProps as RacSwitchProps } from 'react-aria-components';
import { classNames } from '../helpers/classNames';
import { CheckIcon, CrossIcon } from '../icons';
import type { CommonProps } from '../types/CommonProps';
import { thumb, track } from './Switch.css';

export type SwitchProps = Omit<RacSwitchProps, keyof CommonProps> & Omit<CommonProps, 'children'>;

/**
 * A switch allows a user to turn a setting on or off.
 */
export const Switch = ({ className, ...props }: SwitchProps) => (
  <RacSwitch {...props} className={classNames(track, className)}>
    {({ isSelected }) => (
      <div className={thumb}>
        {isSelected ? <CheckIcon size="small" /> : <CrossIcon size="small" />}
      </div>
    )}
  </RacSwitch>
);
