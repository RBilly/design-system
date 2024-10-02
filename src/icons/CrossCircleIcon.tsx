// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgCrossCircle from './svg/CrossCircle.svg';
import { SIZE_MAP } from './utils';

export function CrossCircleIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgCrossCircle width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
