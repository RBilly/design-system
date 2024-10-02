// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgChevronDown from './svg/ChevronDown.svg';
import { SIZE_MAP } from './utils';

export function ChevronDownIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgChevronDown width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
