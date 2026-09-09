import * as React from 'react';
export interface CheckpointProps {
  index?: number;
  label?: string;
  /** filled/lime once the group passes it */
  reached?: boolean;
  /** show a flag instead of a number (destination) */
  finish?: boolean;
  size?: number;
}
export function Checkpoint(props: CheckpointProps): JSX.Element;
