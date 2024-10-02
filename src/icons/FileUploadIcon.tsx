// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgFileUpload from './svg/FileUpload.svg';
import { SIZE_MAP } from './utils';

export function FileUploadIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgFileUpload width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
