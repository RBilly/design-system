// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgParameters from './svg/Parameters.svg';
import { SIZE_MAP } from './utils';

export function ParametersIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgParameters width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
