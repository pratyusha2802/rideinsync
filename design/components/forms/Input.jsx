import React from 'react';

export function Input({ value, placeholder, onChange, style, ...rest }) {
  return (
    <input value={value} placeholder={placeholder} onChange={onChange}
      style={{ width: '100%', height: 'var(--input-height)', padding: '0 var(--space-md)', boxSizing: 'border-box',
        background: 'var(--color-surface-2)', border: '1px solid transparent', borderRadius: 'var(--radius-md)',
        color: 'var(--color-text-primary)', fontFamily: 'var(--font-ui)', fontSize: 'var(--text-body-size)',
        outline: 'none', transition: 'border-color .15s ease' }}
      onFocus={e => (e.target.style.borderColor = 'var(--color-accent)')}
      onBlur={e => (e.target.style.borderColor = 'transparent')} {...rest} />
  );
}
