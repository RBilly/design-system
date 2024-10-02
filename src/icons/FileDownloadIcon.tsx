// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgFileDownload from './svg/FileDownload.svg';
import { SIZE_MAP } from './utils';

export function FileDownloadIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgFileDownload width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
