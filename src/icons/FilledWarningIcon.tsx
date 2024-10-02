// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgFilledWarning from './svg/FilledWarning.svg';
import { SIZE_MAP } from './utils';

export function FilledWarningIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return (
    <SvgFilledWarning width={sizeInPx} height={sizeInPx} className={className} style={style} />
  );
}
