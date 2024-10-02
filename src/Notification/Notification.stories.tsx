import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';
import { Button } from '../Button';
import { groupArgTypes } from '../helpers/storybook/arg-utils';
import type { NotificationContainerProps } from './NotificationContainer';
import {
  type NotificationApi,
  type NotificationApiProps,
  NotificationProvider,
  useNotification
} from './NotificationProvider';

type StoryType = NotificationApiProps &
  Pick<NotificationContainerProps, 'position'> & {
    api: NotificationApi;
  };

const argTypes = groupArgTypes<keyof StoryType>(
  ['ProviderProps', ['position']],
  ['ApiProps', ['icon', 'title', 'description', 'duration']],
  ['ApiEvents', ['onClose']]
);

const NotificationWrapper = ({ children }: { children: (api: NotificationApi) => ReactNode }) => {
  const api = useNotification();
  return children(api);
};

/**
 * Notifications must be used to display brief, temporary feedback notifications of actions, errors, or other events in an application. <br/>
 * Notifications floats above the UI to provide users with non-critical updates on an app's processes. <br/>
 * Notifications have a fixed position and a high z-index,they're intended to break out of the document flow. <br/>
 * Notifications differ from Dialogs in that Notifications are not intended to convey critical information or block the user from interacting with the rest of the application.
 *
 * Notifications can only be used inside the NotificationProvider. Use the provided hook to create a Notification.
 *
 * ```tsx
 * const App = () => (
 *   <NotificationProvider>
 *     <NotificationGenerator/>
 *   </NotificationProvider>
 * );
 *
 * const NotificationGenerator = () => {
 *   const {info, error, success, warning} = useNotification();
 *   const createInfo = () => info({title: 'info notification', duration: 'default'})
 *   const createSuccess = () => success({title: 'success notification', duration: 'default'})
 *   const createWarning = () => warning({title: 'warning notification', duration: 'default'})
 *   const createError = () => error({title: 'error notification', duration: 'default'})
 *   return {
 *     <div>
 *       <Button onPress={createInfo}>Create Info</Button>
 *       <Button onPress={createSuccess}>Create Success</Button>
 *       <Button onPress={createWarning}>Create Warning</Button>
 *       <Button onPress={createError}>Create Error</Button>
 *     </div>
 *   }
 * }
 * ```
 */
const meta = {
  title: 'Components/Feedback/Notification',
  tags: ['autodocs'],
  argTypes: {
    ...argTypes,
    title: {
      ...argTypes.title,
      description:
        'The only mandatory property. It should be a short text to convey the intent of the notification to the user.'
    },
    duration: {
      ...argTypes.duration,
      description:
        'Time in milliseconds before Notification is closed. If not set, the notification will never be closed automatically. It can also be set to "default" which is equivalent to `5000` ms.'
    },
    description: {
      ...argTypes.description,
      description:
        'An optional description can be provided to complete the title. It can be as long as needed but, it is recommended to keep it as short as possible.'
    },
    position: {
      ...argTypes.position,
      description: 'Determine in which corner of the notifications will be placed',
      control: { type: 'select' },
      options: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']
    }
  },
  args: {
    description: 'Some content description. Try to get a multiline description.',
    duration: 5000,
    position: 'bottomRight'
  },
  decorators: [
    (Story, { args }) => (
      <NotificationProvider position={args.position}>
        <NotificationWrapper>{(api) => <Story args={{ ...args, api }} />}</NotificationWrapper>
      </NotificationProvider>
    )
  ]
} satisfies Meta<StoryType>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  // @ts-ignore
  args: {
    ...meta.args,
    title: 'Notification Title'
  },
  render: ({ title, description, duration, api }) => {
    return <Button onPress={() => api.show({ title, description, duration })}>Default</Button>;
  }
} satisfies Story;

export const InformationType = {
  // @ts-ignore
  args: {
    ...meta.args,
    title: 'Info Notification Title'
  },
  render: ({ title, description, duration, api }) => {
    return <Button onPress={() => api.info({ title, description, duration })}>Info</Button>;
  }
} satisfies Story;

export const SuccessType = {
  // @ts-ignore
  args: {
    ...meta.args,
    title: 'Success Notification Title'
  },
  render: ({ title, description, duration, api }) => {
    return <Button onPress={() => api.success({ title, description, duration })}>Success</Button>;
  }
} satisfies Story;

export const WarningType = {
  // @ts-ignore
  args: {
    ...meta.args,
    title: 'Warning Notification Title'
  },
  render: ({ title, description, duration, api }) => {
    return <Button onPress={() => api.warning({ title, description, duration })}>Warning</Button>;
  }
} satisfies Story;

export const ErrorType = {
  // @ts-ignore
  args: {
    ...meta.args,
    title: 'Error Notification Title'
  },
  render: ({ title, description, duration, api }) => {
    return <Button onPress={() => api.error({ title, description, duration })}>Error</Button>;
  }
} satisfies Story;
