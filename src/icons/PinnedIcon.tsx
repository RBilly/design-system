// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgPinned from './svg/Pinned.svg';
import { SIZE_MAP } from './utils';

export function PinnedIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgPinned width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
