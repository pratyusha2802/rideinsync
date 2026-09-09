import * as React from 'react';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** use surface-1 instead of surface-2 */
  elevated?: boolean;
  /** ambient green glow instead of drop shadow */
  glow?: boolean;
  padding?: string;
}
export function Card(props: CardProps): JSX.Element;
