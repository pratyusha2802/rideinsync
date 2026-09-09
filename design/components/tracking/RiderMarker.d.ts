import * as React from 'react';
export interface RiderMarkerProps {
  role?: 'lead' | 'sweep' | 'member';
  /** name chip under the marker */
  label?: string;
  /** initials for member markers */
  initials?: string;
  /** heading in degrees (lead chevron rotation) */
  heading?: number;
  /** emphasize as the current user */
  you?: boolean;
  size?: number;
}
export function RiderMarker(props: RiderMarkerProps): JSX.Element;
