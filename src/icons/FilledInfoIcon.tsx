// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgFilledInfo from './svg/FilledInfo.svg';
import { SIZE_MAP } from './utils';

export function FilledInfoIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgFilledInfo width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
