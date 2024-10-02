// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgSortBy from './svg/SortBy.svg';
import { SIZE_MAP } from './utils';

export function SortByIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgSortBy width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
