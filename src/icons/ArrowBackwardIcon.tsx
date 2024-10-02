// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgArrowBackward from './svg/ArrowBackward.svg';
import { SIZE_MAP } from './utils';

export function ArrowBackwardIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return (
    <SvgArrowBackward width={sizeInPx} height={sizeInPx} className={className} style={style} />
  );
}
