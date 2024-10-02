// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgMenu from './svg/Menu.svg';
import { SIZE_MAP } from './utils';

export function MenuIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgMenu width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
