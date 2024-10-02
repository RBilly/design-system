// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgLockPerson from './svg/LockPerson.svg';
import { SIZE_MAP } from './utils';

export function LockPersonIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgLockPerson width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
