// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgEject from './svg/Eject.svg';
import { SIZE_MAP } from './utils';

export function EjectIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgEject width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
