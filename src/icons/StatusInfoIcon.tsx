// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgStatusInfo from './svg/StatusInfo.svg';
import { SIZE_MAP } from './utils';

export function StatusInfoIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgStatusInfo width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
