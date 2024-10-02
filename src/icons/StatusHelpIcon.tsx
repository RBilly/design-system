// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgStatusHelp from './svg/StatusHelp.svg';
import { SIZE_MAP } from './utils';

export function StatusHelpIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgStatusHelp width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
