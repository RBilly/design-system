// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgMore from './svg/More.svg';
import { SIZE_MAP } from './utils';

export function MoreIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgMore width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
