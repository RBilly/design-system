// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgLock from './svg/Lock.svg';
import { SIZE_MAP } from './utils';

export function LockIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgLock width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
