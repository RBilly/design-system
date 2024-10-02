// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgStop from './svg/Stop.svg';
import { SIZE_MAP } from './utils';

export function StopIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgStop width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
