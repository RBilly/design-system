// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgHistory from './svg/History.svg';
import { SIZE_MAP } from './utils';

export function HistoryIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgHistory width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
