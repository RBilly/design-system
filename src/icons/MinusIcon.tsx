// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgMinus from './svg/Minus.svg';
import { SIZE_MAP } from './utils';

export function MinusIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgMinus width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
