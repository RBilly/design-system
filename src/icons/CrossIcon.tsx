// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgCross from './svg/Cross.svg';
import { SIZE_MAP } from './utils';

export function CrossIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgCross width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
