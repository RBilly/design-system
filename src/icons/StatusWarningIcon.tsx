// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgStatusWarning from './svg/StatusWarning.svg';
import { SIZE_MAP } from './utils';

export function StatusWarningIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return (
    <SvgStatusWarning width={sizeInPx} height={sizeInPx} className={className} style={style} />
  );
}
