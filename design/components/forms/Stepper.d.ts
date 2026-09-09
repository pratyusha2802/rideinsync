import * as React from 'react';
export interface StepperProps {
  value: number;
  /** override the shown label, e.g. "2 mi" or "2000 Steps / Trip" */
  display?: React.ReactNode;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
}
export function Stepper(props: StepperProps): JSX.Element;
