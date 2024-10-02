// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgSettings from './svg/Settings.svg';
import { SIZE_MAP } from './utils';

export function SettingsIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgSettings width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
