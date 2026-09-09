import * as React from 'react';
export type IconName = 'chevron-left'|'chevron-right'|'play'|'skip-back'|'skip-forward'|'plus'|'minus'|'turn-right'|'turn-left'|'straight'|'incline'|'flag'|'phone'|'bluetooth'|'projector'|'navigation'|'mic'|'check';
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon name from the RideInSync (Lucide-substituted) set */
  name: IconName;
  /** px size, default 24 */
  size?: number;
  /** stroke color, default currentColor */
  color?: string;
  strokeWidth?: number;
}
export function Icon(props: IconProps): JSX.Element;
