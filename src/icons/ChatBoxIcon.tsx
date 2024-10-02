// Generated file. Do not edit directly.
import type { IconProps } from './IconProps';
import SvgChatBox from './svg/ChatBox.svg';
import { SIZE_MAP } from './utils';

export function ChatBoxIcon({ size = 'medium', className, style }: IconProps) {
  const sizeInPx = SIZE_MAP[size];

  return <SvgChatBox width={sizeInPx} height={sizeInPx} className={className} style={style} />;
}
