// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgRefresh from './svg/Refresh.svg';
import { SIZE_MAP } from './utils';

export function RefreshIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgRefresh width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
