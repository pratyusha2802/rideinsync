import * as React from 'react';
export interface RiderListRowProps {
  name: string;
  role?: 'lead' | 'sweep' | 'member';
  initials?: string;
  /** gap-to-you or gap-to-lead, e.g. "0.3 mi" */
  distance?: string;
  /** "On route" (default) reads muted; anything else reads as an alert in coral */
  status?: string;
  you?: boolean;
}
export function RiderListRow(props: RiderListRowProps): JSX.Element;
