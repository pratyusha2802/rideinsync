import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function TurnRow({ icon = 'turn-right', distance, street, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', padding: 'var(--space-sm) 0',
      borderBottom: '1px solid var(--color-divider)', ...style }}>
      <Icon name={icon} size={22} color="var(--color-text-primary)" />
      <div style={{ flex: 1 }}>
        <div style={{ color: 'var(--color-text-primary)', fontSize: 'var(--text-body-size)', fontWeight: 'var(--weight-semibold)' }}>{distance}</div>
        <div style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-caption)' }}>{street}</div>
      </div>
    </div>
  );
}
