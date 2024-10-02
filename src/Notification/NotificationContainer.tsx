import { type AriaToastRegionProps, useToastRegion } from '@react-aria/toast';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useContext, useEffect, useRef, useState } from 'react';
import { Notification } from './Notification';
import { firstChildHeight, stackStyle } from './Notification.css';
import { toastRegion } from './NotificationContainer.css';
import { NotificationContext } from './NotificationProvider';

export type NotificationContainerProps = AriaToastRegionProps & {
  position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
};

const STACK_THRESHOLD = 3;
const DEFAULT_HEIGHT = 100;

export const NotificationContainer = ({
  position = 'bottomRight',
  ...props
}: NotificationContainerProps) => {
  const state = useContext(NotificationContext);
  if (!state) {
    throw new Error('NotificationContext used outside of NotificationProvider');
  }
  const [isHovered, setHovered] = useState(false);
  const [firstNotificationHeight, setFirstNotificationHeight] = useState(DEFAULT_HEIGHT);
  const ref = useRef<HTMLDivElement>(null);
  const { regionProps } = useToastRegion(props, state, ref);

  // Make sure hovered state is reset
  if (state.visibleToasts.length === 0 && isHovered) {
    setHovered(false);
  }
  const stacked = !isHovered && state.visibleToasts.length > STACK_THRESHOLD;

  useEffect(() => {
    setFirstNotificationHeight(ref.current?.firstElementChild?.clientHeight || DEFAULT_HEIGHT);
  });

  return (
    <div
      ref={ref}
      {...regionProps}
      className={toastRegion({ position })}
      onMouseEnter={() => setHovered(true)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onMouseLeave={() => setHovered(false)}
      style={assignInlineVars({ [firstChildHeight]: `${firstNotificationHeight}px` })}
    >
      {state.visibleToasts.map((toast, index) => {
        return (
          <div
            key={`${toast.key}-wrapper`}
            className={stackStyle({
              position,
              stacked
            })}
          >
            <Notification
              key={toast.key}
              toast={toast}
              state={state}
              isFirst={index === 0}
              isHovered={isHovered}
            />
          </div>
        );
      })}
    </div>
  );
};
