// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgChevronLeft from './svg/ChevronLeft.svg';
import { SIZE_MAP } from './utils';

export function ChevronLeftIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgChevronLeft width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
