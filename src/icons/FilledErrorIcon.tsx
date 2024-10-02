// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgFilledError from './svg/FilledError.svg';
import { SIZE_MAP } from './utils';

export function FilledErrorIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgFilledError width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
