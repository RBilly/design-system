// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgLockClock from './svg/LockClock.svg';
import { SIZE_MAP } from './utils';

export function LockClockIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgLockClock width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
