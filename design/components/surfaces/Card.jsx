import React from 'react';

export function Card({ children, elevated, glow, padding = 'var(--space-md)', style, ...rest }) {
  return (
    <div style={{ background: elevated ? 'var(--color-surface-1)' : 'var(--color-surface-2)',
      borderRadius: 'var(--radius-lg)', padding, boxShadow: glow ? 'var(--glow-accent)' : 'var(--shadow-card)',
      color: 'var(--color-text-primary)', ...style }} {...rest}>
      {children}
    </div>
  );
}
