// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgSearch from './svg/Search.svg';
import { SIZE_MAP } from './utils';

export function SearchIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgSearch width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
