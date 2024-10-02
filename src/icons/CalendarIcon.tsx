// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgCalendar from './svg/Calendar.svg';
import { SIZE_MAP } from './utils';

export function CalendarIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgCalendar width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
