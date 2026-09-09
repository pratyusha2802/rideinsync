import * as React from 'react';
import { IconName } from '../core/Icon';
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: IconName;
  /** diameter px, default 48 */
  size?: number;
  iconSize?: number;
  /** surface (default) | surface-4 | accent */
  variant?: 'surface' | 'surface-4' | 'accent';
}
export function IconButton(props: IconButtonProps): JSX.Element;
