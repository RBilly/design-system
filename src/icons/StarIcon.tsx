// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgStar from './svg/Star.svg';
import { SIZE_MAP } from './utils';

export function StarIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgStar width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
