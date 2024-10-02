import type { ReactElement } from 'react';
import { Button as RacButton, type ButtonProps as RacButtonProps } from 'react-aria-components';
import { classNames } from '../helpers/classNames';
import { LoadingSpinnerIcon } from '../icons';
import type { CommonProps } from '../types/CommonProps';
import { container, contentWrapper, loadingWrapper } from './Button.css';

export type ButtonProps = Omit<RacButtonProps, keyof CommonProps> &
  CommonProps & {
    /** Button icon */
    icon?: ReactElement;
    /** Element placed before the children. */
    iconPosition?: 'before' | 'after';
    /** Whether the button is used on an accent background. */
    onAccent?: boolean;
    /** Whether the button is in a loading state*/
    isLoading?: boolean;
    /** The visual style of the button. */
    variant?: 'text' | 'filled' | 'outlined';
    /** Option to fit button width to its parent width */
    block?: boolean;
  };

/**
 * A button allows a user to perform an action, with mouse, touch, and keyboard interactions.
 */
export const Button = ({
  children,
  className,
  icon,
  iconPosition = 'before',
  onAccent = false,
  variant = 'text',
  isDisabled = false,
  isLoading = false,
  block = false,
  ...rest
}: ButtonProps) => {
  const onBackground = onAccent ? 'accent' : 'default';
  const loadingIcon = <LoadingSpinnerIcon />;
  const iconElement = isLoading && icon ? loadingIcon : icon;
  const loadingIconWrapper = <span className={loadingWrapper}>{loadingIcon}</span>;

  return (
    <RacButton
      {...rest}
      isDisabled={isDisabled || isLoading}
      className={classNames(container({ onBackground, variant, block, isLoading }), className)}
    >
      {iconPosition === 'before' && iconElement}
      {/* if there is no icon displayed, loading icon will replace the text */}
      {isLoading && !iconElement && loadingIconWrapper}
      {/* in order to preserve button size when displaying loading icon, we only hide the text */}
      <span className={contentWrapper({ hide: isLoading && !iconElement })}>{children}</span>
      {iconPosition === 'after' && iconElement}
    </RacButton>
  );
};
