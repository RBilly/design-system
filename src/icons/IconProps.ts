import type { CommonProps } from '../types/CommonProps';

export type IconProps = Omit<CommonProps, 'children'> & {
  /** The size of the icon. */
  size?: 'small' | 'medium' | 'large' | 'xlarge';
};
