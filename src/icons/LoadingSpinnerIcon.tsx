// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgLoadingSpinner from './svg/LoadingSpinner.svg';
import { SIZE_MAP } from './utils';

export function LoadingSpinnerIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return (
    <SvgLoadingSpinner width={sizeInPx} height={sizeInPx} className={className} style={style} />
  );
}
