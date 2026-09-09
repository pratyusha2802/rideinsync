import * as React from 'react';
import { IconName } from '../core/Icon';
/**
 * Primary action pill — the one accent element per screen.
 * @startingPoint section="Forms" subtitle="Accent, dark & ghost pill buttons" viewport="700x160"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = lime pill; secondary = dark outlined; ghost = text only */
  variant?: 'primary' | 'secondary' | 'ghost';
  iconLeft?: IconName;
  iconRight?: IconName;
  loading?: boolean;
  /** stretch to container width (default true) */
  fullWidth?: boolean;
}
export function Button(props: ButtonProps): JSX.Element;
