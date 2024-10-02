// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgViewList from './svg/ViewList.svg';
import { SIZE_MAP } from './utils';

export function ViewListIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgViewList width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
