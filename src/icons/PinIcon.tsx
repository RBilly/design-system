// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgPin from './svg/Pin.svg';
import { SIZE_MAP } from './utils';

export function PinIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgPin width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
