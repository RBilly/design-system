// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgFilter from './svg/Filter.svg';
import { SIZE_MAP } from './utils';

export function FilterIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgFilter width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
