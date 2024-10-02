// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgViewColumn from './svg/ViewColumn.svg';
import { SIZE_MAP } from './utils';

export function ViewColumnIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgViewColumn width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
