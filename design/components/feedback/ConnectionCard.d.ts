import * as React from 'react';
export interface ConnectionCardProps {
  /** loading / status text under the connector */
  status?: string;
  /** lights connector line + status in accent when true */
  connected?: boolean;
}
export function ConnectionCard(props: ConnectionCardProps): JSX.Element;
