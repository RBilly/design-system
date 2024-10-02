// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgMoreVertical from './svg/MoreVertical.svg';
import { SIZE_MAP } from './utils';

export function MoreVerticalIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgMoreVertical width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
