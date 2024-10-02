import {
  Checkbox as RacCheckbox,
  type CheckboxProps as RacCheckboxProps
} from 'react-aria-components';
import { classNames } from '../helpers/classNames';
import type { CommonProps } from '../types/CommonProps';
import { box, boxContainer, container, indeterminateIcon, selectedIcon } from './Checkbox.css';
import { IndeterminateIcon } from './IndeterminateIcon';
import { SelectedIcon } from './SelectedIcon';

export type CheckboxProps = Omit<
  RacCheckboxProps,
  | keyof CommonProps
  // TODO: study how to handle validation.
  // Related to https://stljirap.sial.com/browse/UXUI-1452
  | 'validate'
  | 'validationBehavior'
> &
  CommonProps;

/**
 * A checkbox allows a user to select multiple items from a list of individual items, or to mark one individual item as selected.
 */
export const Checkbox = ({ children, className, ...props }: CheckboxProps) => (
  <RacCheckbox {...props} className={classNames(container, className)}>
    {({ isIndeterminate }) => (
      <>
        <div className={boxContainer}>
          <div className={box}>
            {isIndeterminate ? (
              <IndeterminateIcon className={indeterminateIcon} />
            ) : (
              <SelectedIcon className={selectedIcon} />
            )}
          </div>
        </div>
        {children}
      </>
    )}
  </RacCheckbox>
);
