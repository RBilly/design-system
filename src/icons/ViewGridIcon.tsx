// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgViewGrid from './svg/ViewGrid.svg';
import { SIZE_MAP } from './utils';

export function ViewGridIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgViewGrid width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
