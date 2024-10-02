import type { CSSProperties, ReactNode } from 'react';

export type CommonProps = {
  /** The children of the component. */
  children: ReactNode;
  /** The CSS className for the element. */
  className?: string;
  /** The inline style for the element. */
  style?: CSSProperties;
};
