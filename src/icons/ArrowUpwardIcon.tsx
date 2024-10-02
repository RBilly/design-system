// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgArrowUpward from './svg/ArrowUpward.svg';
import { SIZE_MAP } from './utils';

export function ArrowUpwardIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgArrowUpward width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
