// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgFilledSuccess from './svg/FilledSuccess.svg';
import { SIZE_MAP } from './utils';

export function FilledSuccessIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return (
    <SvgFilledSuccess width={sizeInPx} height={sizeInPx} className={className} style={style} />
  );
}
