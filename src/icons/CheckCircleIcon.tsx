// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgCheckCircle from './svg/CheckCircle.svg';
import { SIZE_MAP } from './utils';

export function CheckCircleIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgCheckCircle width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
