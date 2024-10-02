// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgCheck from './svg/Check.svg';
import { SIZE_MAP } from './utils';

export function CheckIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgCheck width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
