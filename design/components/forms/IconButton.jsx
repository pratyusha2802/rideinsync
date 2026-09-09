import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function IconButton({ name, size = 48, iconSize = 22, variant = 'surface', accent, style, ...rest }) {
  const bg = variant === 'accent' ? 'var(--color-accent)'
    : variant === 'surface-4' ? 'var(--color-surface-4)' : 'var(--color-surface-3)';
  const color = variant === 'accent' ? 'var(--color-text-on-accent)' : 'var(--color-text-primary)';
  return (
    <button type="button" aria-label={name}
      style={{ width: size, height: size, borderRadius: 'var(--radius-full)', border: 'none',
        background: bg, color, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', transition: 'background .15s ease', ...style }} {...rest}>
      <Icon name={name} size={iconSize} />
    </button>
  );
}
