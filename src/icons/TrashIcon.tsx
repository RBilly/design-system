// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgTrash from './svg/Trash.svg';
import { SIZE_MAP } from './utils';

export function TrashIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgTrash width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
