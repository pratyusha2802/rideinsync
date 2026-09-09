import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Button({ variant = 'primary', children, iconLeft, iconRight, disabled, loading, fullWidth = true, style, onClick, ...rest }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-xs)',
    width: fullWidth ? '100%' : 'auto', height: 'var(--control-height)', padding: '0 var(--space-lg)',
    border: 'none', borderRadius: 'var(--radius-full)', cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'var(--font-ui)', fontSize: 'var(--text-body-size)', fontWeight: 'var(--weight-semibold)',
    lineHeight: 1, transition: 'background .15s ease, opacity .15s ease', outline: 'none',
  };
  const variants = {
    primary: { background: 'var(--color-accent)', color: 'var(--color-text-on-accent)' },
    secondary: { background: 'var(--color-surface-2)', color: 'var(--color-text-primary)', border: '1px solid var(--color-divider)' },
    ghost: { background: 'transparent', color: 'var(--color-text-primary)' },
  };
  const disabledStyle = disabled ? { background: 'var(--color-surface-3)', color: 'var(--color-text-tertiary)', border: 'none' } : null;
  return (
    <button type="button" disabled={disabled || loading} onClick={onClick}
      style={{ ...base, ...variants[variant], ...disabledStyle, ...style }} {...rest}>
      {iconLeft && <Icon name={iconLeft} size={20} />}
      {loading ? 'Loading…' : children}
      {iconRight && <Icon name={iconRight} size={20} />}
    </button>
  );
}
