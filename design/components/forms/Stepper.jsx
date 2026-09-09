import React from 'react';
import { IconButton } from './IconButton.jsx';

export function Stepper({ value, display, min, max, step = 1, onChange, style }) {
  const atMin = min != null && value <= min;
  const atMax = max != null && value >= max;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-md)', ...style }}>
      <IconButton name="minus" variant="surface-4" disabled={atMin}
        style={atMin ? { opacity: .4 } : null} onClick={() => !atMin && onChange && onChange(value - step)} />
      <span style={{ minWidth: 96, textAlign: 'center', color: 'var(--color-text-primary)',
        fontFamily: 'var(--font-numeric)', fontVariantNumeric: 'tabular-nums', fontSize: 'var(--text-body-size)',
        fontWeight: 'var(--weight-semibold)' }}>{display != null ? display : value}</span>
      <IconButton name="plus" variant="surface-4" disabled={atMax}
        style={atMax ? { opacity: .4 } : null} onClick={() => !atMax && onChange && onChange(value + step)} />
    </div>
  );
}
