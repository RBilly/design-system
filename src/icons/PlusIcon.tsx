// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgPlus from './svg/Plus.svg';
import { SIZE_MAP } from './utils';

export function PlusIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgPlus width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
