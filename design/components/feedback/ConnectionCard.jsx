import React from 'react';
import { Icon } from '../core/Icon.jsx';

function Node({ icon }) {
  return (
    <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-full)', background: 'var(--color-surface-3)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
      <Icon name={icon} size={24} color="var(--color-text-primary)" />
    </div>
  );
}
export function ConnectionCard({ status = 'Connecting…', connected = false, style }) {
  const line = { flex: 1, height: 2, background: connected ? 'var(--color-accent)' : 'var(--color-surface-3)' };
  return (
    <div style={{ background: 'var(--color-surface-2)', borderRadius: 'var(--radius-md)', padding: 'var(--space-lg)', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Node icon="phone" /><div style={line} />
        <Node icon="bluetooth" /><div style={line} />
        <Node icon="projector" />
      </div>
      <div style={{ marginTop: 'var(--space-md)', textAlign: 'center', color: connected ? 'var(--color-accent)' : 'var(--color-text-secondary)',
        fontSize: 'var(--text-label)', fontWeight: 'var(--weight-medium)' }}>{status}</div>
    </div>
  );
}
