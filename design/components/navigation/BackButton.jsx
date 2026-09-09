import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function BackButton({ onClick, style, ...rest }) {
  return (
    <button type="button" aria-label="Back" onClick={onClick}
      style={{ width: 40, height: 40, border: 'none', background: 'transparent', cursor: 'pointer',
        color: 'var(--color-text-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', ...style }} {...rest}>
      <Icon name="chevron-left" size={26} />
    </button>
  );
}
