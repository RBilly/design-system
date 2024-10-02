// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgPrint from './svg/Print.svg';
import { SIZE_MAP } from './utils';

export function PrintIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgPrint width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
