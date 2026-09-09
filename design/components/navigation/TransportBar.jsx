import React from 'react';
import { IconButton } from '../forms/IconButton.jsx';

export function TransportBar({ startLabel = '0 ft', endLabel = '1.4 mi', progress = 30, playing = false, onToggle, onPrev, onNext, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', padding: 'var(--space-md)',
      background: 'var(--color-surface-1)', borderRadius: 'var(--radius-full)', boxShadow: 'var(--shadow-card)', ...style }}>
      <div style={{ position: 'relative', height: 4, borderRadius: 999, background: 'var(--color-surface-3)' }}>
        <div style={{ height: '100%', width: progress + '%', background: 'var(--color-accent)', borderRadius: 999 }} />
        <div style={{ position: 'absolute', top: '50%', left: progress + '%', width: 12, height: 12, borderRadius: 999,
          background: 'var(--color-accent-bright)', transform: 'translate(-50%,-50%)' }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-caption)', fontVariantNumeric: 'tabular-nums' }}>{startLabel}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
          <IconButton name="skip-back" variant="surface" size={40} iconSize={18} onClick={onPrev} />
          <IconButton name={playing ? 'straight' : 'play'} variant="accent" size={52} iconSize={22} onClick={onToggle} />
          <IconButton name="skip-forward" variant="surface" size={40} iconSize={18} onClick={onNext} />
        </div>
        <span style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-caption)', fontVariantNumeric: 'tabular-nums' }}>{endLabel}</span>
      </div>
    </div>
  );
}
