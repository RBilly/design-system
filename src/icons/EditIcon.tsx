// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgEdit from './svg/Edit.svg';
import { SIZE_MAP } from './utils';

export function EditIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgEdit width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
