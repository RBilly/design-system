// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgStatusError from './svg/StatusError.svg';
import { SIZE_MAP } from './utils';

export function StatusErrorIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgStatusError width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
