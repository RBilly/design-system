// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgPlay from './svg/Play.svg';
import { SIZE_MAP } from './utils';

export function PlayIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgPlay width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
