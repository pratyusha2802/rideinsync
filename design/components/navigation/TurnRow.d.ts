import * as React from 'react';
import { IconName } from '../core/Icon';
export interface TurnRowProps {
  icon?: IconName;
  /** e.g. "90 ft" */
  distance: string;
  /** street sub-caption */
  street: string;
}
export function TurnRow(props: TurnRowProps): JSX.Element;
