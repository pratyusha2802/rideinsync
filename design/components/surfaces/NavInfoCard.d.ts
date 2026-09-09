import * as React from 'react';
import { IconName } from '../core/Icon';
export interface NavInfoCardProps {
  icon?: IconName;
  /** large metric, e.g. "30 ft" */
  metric: string;
  /** descriptor, e.g. "Slight incline" */
  descriptor: string;
  /** 0–100 progress toward the maneuver */
  progress?: number;
}
export function NavInfoCard(props: NavInfoCardProps): JSX.Element;
