// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgVisibilityOff from './svg/VisibilityOff.svg';
import { SIZE_MAP } from './utils';

export function VisibilityOffIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return (
    <SvgVisibilityOff width={sizeInPx} height={sizeInPx} className={className} style={style} />
  );
}
