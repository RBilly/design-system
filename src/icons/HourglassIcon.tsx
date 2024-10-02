// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgHourglass from './svg/Hourglass.svg';
import { SIZE_MAP } from './utils';

export function HourglassIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgHourglass width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
