// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgLogout from './svg/Logout.svg';
import { SIZE_MAP } from './utils';

export function LogoutIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgLogout width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
