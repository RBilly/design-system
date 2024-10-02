// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgStarred from './svg/Starred.svg';
import { SIZE_MAP } from './utils';

export function StarredIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgStarred width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
