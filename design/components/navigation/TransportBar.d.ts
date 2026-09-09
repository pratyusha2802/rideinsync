import * as React from 'react';
export interface TransportBarProps {
  startLabel?: string;
  endLabel?: string;
  /** 0–100 route scrub position */
  progress?: number;
  playing?: boolean;
  onToggle?: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}
export function TransportBar(props: TransportBarProps): JSX.Element;
