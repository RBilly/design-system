import { type AriaToastProps, useToast } from '@react-aria/toast';
import type { ToastState } from '@react-stately/toast';
import { useEffect, useRef, useState } from 'react';
import { useElapsedTime } from 'use-elapsed-time';
import { ToolButton } from '../ToolButton';
import { classNames } from '../helpers/classNames';
import { CrossIcon } from '../icons';
import {
  contentStyle,
  descriptionStyle,
  dismissStyle,
  progressStyle,
  titleStyle,
  toastStyle
} from './Notification.css';
import type { T_Toast } from './NotificationProvider';

export interface NotificationProps<T> extends AriaToastProps<T> {
  state: ToastState<T>;
  className?: string;
  isHovered: boolean;
  isFirst: boolean;
}

export const Notification = ({
  state,
  className,
  isHovered,
  isFirst,
  ...props
}: NotificationProps<T_Toast>) => {
  const ref = useRef<HTMLDivElement>(null);
  const { toast } = props;
  const [isPaused, setPaused] = useState(false);
  const { elapsedTime, reset } = useElapsedTime({
    isPlaying: !isPaused,
    duration: toast.timeout ? toast.timeout / 1000 : 0
  });
  const { icon, title, description, type } = toast.content;
  const { toastProps, contentProps, titleProps, descriptionProps, closeButtonProps } = useToast(
    props,
    state,
    ref
  );

  useEffect(() => {
    if (toast.timeout && toast.timer) {
      if (isFirst && !isHovered) {
        // @ts-ignore
        if (!toast.timer.timerId) {
          toast.timer.resume();
        }
        setPaused(false);
      } else if (!isFirst || isHovered) {
        // @ts-ignore
        if (toast.timer.timerId && !isHovered) {
          toast.timer.pause();
          toast.timer.reset(toast.timeout);
          toast.timer.pause();
          reset();
        }
        setPaused(true);
      }
    }
  }, [isFirst, isHovered, toast, reset]);

  return (
    <div
      {...toastProps}
      ref={ref}
      className={classNames(toastStyle, className)}
      data-animation={toast.animation}
    >
      <div {...contentProps} className={contentStyle}>
        <div {...titleProps} className={titleStyle({ type })}>
          {icon || <div />}
          {title}
        </div>
        {description && (
          <div {...descriptionProps} className={descriptionStyle}>
            {description}
          </div>
        )}
      </div>
      <div className={dismissStyle}>
        <ToolButton {...closeButtonProps} variant="text" icon={<CrossIcon size="small" />} />
      </div>
      {toast.timeout && (
        <progress
          className={progressStyle({ type, hidden: !isFirst })}
          max={toast.timeout}
          value={Math.ceil((toast.timeout / 1000 - elapsedTime) * 1000)}
        />
      )}
    </div>
  );
};
