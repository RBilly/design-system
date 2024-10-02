// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgPlusCircle from './svg/PlusCircle.svg';
import { SIZE_MAP } from './utils';

export function PlusCircleIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgPlusCircle width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
