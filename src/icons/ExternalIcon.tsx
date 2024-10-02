// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgExternal from './svg/External.svg';
import { SIZE_MAP } from './utils';

export function ExternalIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgExternal width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
