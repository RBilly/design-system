// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgPause from './svg/Pause.svg';
import { SIZE_MAP } from './utils';

export function PauseIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgPause width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
