import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function NavInfoCard({ icon = 'turn-right', metric, descriptor, progress = 0, style }) {
  return (
    <div style={{ background: 'var(--color-surface-1)', borderRadius: 'var(--radius-md)',
      padding: 'var(--space-md)', boxShadow: 'var(--shadow-card)', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
        <div style={{ width: 44, height: 44, flex: 'none', borderRadius: 'var(--radius-full)',
          background: 'var(--color-surface-3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name={icon} size={24} color="var(--color-accent)" />
        </div>
        <div>
          <div style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-numeric)',
            fontSize: 'var(--text-metric)', lineHeight: 'var(--lh-metric)', fontWeight: 'var(--weight-semibold)' }}>{metric}</div>
          <div style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-label)' }}>{descriptor}</div>
        </div>
      </div>
      <div style={{ marginTop: 'var(--space-md)', height: 4, borderRadius: 999, background: 'var(--color-surface-3)', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: Math.max(0, Math.min(100, progress)) + '%', background: 'var(--color-accent)' }} />
      </div>
    </div>
  );
}
