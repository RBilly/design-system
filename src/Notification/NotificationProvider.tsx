import { type ToastOptions, type ToastState, useToastState } from '@react-stately/toast';
import { type ReactElement, createContext, useContext } from 'react';
import { createPortal } from 'react-dom';
import { FilledErrorIcon, FilledInfoIcon, FilledSuccessIcon, FilledWarningIcon } from '../icons';
import { NotificationContainer, type NotificationContainerProps } from './NotificationContainer';

export type T_Toast = {
  /**
   * An element to be used as an icon before the title.
   * For typed notification, an icon is already provided but can be overwritten.
   */
  icon?: ReactElement;
  /**
   * The only mandatory property. It should be a short text to convey the intent of the notification to the user.
   */
  title: string;
  /**
   * An optional description can be provided to complete the title.
   * It can be as long as needed but, it's recommended to keep it as short as possible.
   */
  description?: string;
  /**
   * Information to indicate the type of the notification. Used to style the notification.
   */
  type?: 'success' | 'info' | 'warning' | 'error';
};

/**
 * Properties to be passed to a function from the notification api
 * Those properties allows you to customize to some extent the content, the look and the behavior of the notification
 */
export type NotificationApiProps = Pick<T_Toast, 'title' | 'description' | 'icon'> &
  Pick<ToastOptions, 'onClose'> & {
    /**
     * Time in milliseconds before Notification is closed.
     * If not set, the notification will never be closed automatically.
     * It can also be set to 'default' which is equivalent to '5000' ms.
     */
    duration?: 'default' | number;
  };

type NotificationApiFn = (props: NotificationApiProps) => string;

/**
 * Provide functions to trigger the display of a notification
 */
export type NotificationApi = {
  show: NotificationApiFn;
  info: NotificationApiFn;
  success: NotificationApiFn;
  warning: NotificationApiFn;
  error: NotificationApiFn;
};

type NotificationProviderProps = Omit<NotificationContainerProps, 'children' | 'state'> & {
  children: ReactElement;
};

export const NotificationContext = createContext<ToastState<T_Toast> | undefined>(undefined);

const DEFAULT_DURATION = 5000;

const extractToastOptions = ({ onClose, duration }: NotificationApiProps): ToastOptions => {
  const toastOptions: ToastOptions = {
    onClose: onClose
  };
  if (duration) {
    toastOptions.timeout = duration === 'default' ? DEFAULT_DURATION : duration;
  }
  return toastOptions;
};

export const useNotification = (): NotificationApi => {
  const state = useContext(NotificationContext);
  if (!state) {
    throw new Error('Notification context is used outside of Notification provider');
  }
  return {
    show: (props) => state.add({ ...props }, extractToastOptions(props)),
    info: (props) =>
      state.add(
        {
          icon: <FilledInfoIcon />,
          type: 'info',
          ...props
        },
        { ...extractToastOptions(props), priority: 1 }
      ),
    success: (props) =>
      state.add(
        {
          icon: <FilledSuccessIcon />,
          type: 'success',
          ...props
        },
        { ...extractToastOptions(props), priority: 2 }
      ),
    warning: (props) =>
      state.add(
        {
          icon: <FilledWarningIcon />,
          type: 'warning',
          ...props
        },
        { ...extractToastOptions(props), priority: 3 }
      ),
    error: (props) =>
      state.add(
        {
          icon: <FilledErrorIcon />,
          type: 'error',
          ...props
        },
        { ...extractToastOptions(props), priority: 4 }
      )
  };
};

export const NotificationProvider = ({ children, ...props }: NotificationProviderProps) => {
  const state = useToastState<T_Toast>({
    maxVisibleToasts: 4,
    hasExitAnimation: false
  });
  return (
    <NotificationContext.Provider value={state}>
      {children}
      {createPortal(<NotificationContainer {...props} />, document.body)}
    </NotificationContext.Provider>
  );
};
