import * as React from 'react';
import { RiderMarkerProps } from './RiderMarker';
import { CheckpointProps } from './Checkpoint';
type Placed<T> = T & { x: number; y: number };
export interface GroupMapProps {
  /** riders positioned on the 380×340 map viewBox */
  riders?: Placed<RiderMarkerProps>[];
  checkpoints?: Placed<CheckpointProps>[];
  /** SVG path for the route line */
  route?: string;
  height?: number;
  round?: boolean;
}
export function GroupMap(props: GroupMapProps): JSX.Element;
