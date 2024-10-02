// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgChevronRight from './svg/ChevronRight.svg';
import { SIZE_MAP } from './utils';

export function ChevronRightIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgChevronRight width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
