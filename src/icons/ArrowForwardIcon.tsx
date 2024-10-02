// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgArrowForward from './svg/ArrowForward.svg';
import { SIZE_MAP } from './utils';

export function ArrowForwardIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgArrowForward width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
