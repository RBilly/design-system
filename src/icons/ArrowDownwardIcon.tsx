// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgArrowDownward from './svg/ArrowDownward.svg';
import { SIZE_MAP } from './utils';

export function ArrowDownwardIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return (
    <SvgArrowDownward width={sizeInPx} height={sizeInPx} className={className} style={style} />
  );
}
