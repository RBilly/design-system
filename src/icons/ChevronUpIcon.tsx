// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgChevronUp from './svg/ChevronUp.svg';
import { SIZE_MAP } from './utils';

export function ChevronUpIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgChevronUp width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
