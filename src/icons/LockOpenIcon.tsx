// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgLockOpen from './svg/LockOpen.svg';
import { SIZE_MAP } from './utils';

export function LockOpenIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgLockOpen width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
