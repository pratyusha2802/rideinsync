import React from 'react';

export function SegmentedControl({ options = ['Low','Medium','High'], value, onChange, style }) {
  return (
    <div role="tablist" style={{ display: 'flex', gap: 4, padding: 4, background: 'var(--color-surface-3)',
      borderRadius: 'var(--radius-full)', ...style }}>
      {options.map(opt => {
        const active = opt === value;
        return (
          <button key={opt} type="button" role="tab" aria-selected={active} onClick={() => onChange && onChange(opt)}
            style={{ flex: 1, height: 40, border: 'none', borderRadius: 'var(--radius-full)', cursor: 'pointer',
              background: active ? 'var(--color-inverse-surface)' : 'transparent',
              color: active ? 'var(--color-text-on-inverse)' : 'var(--color-text-secondary)',
              fontFamily: 'var(--font-ui)', fontSize: 'var(--text-label)',
              fontWeight: active ? 'var(--weight-semibold)' : 'var(--weight-medium)', transition: 'background .15s ease' }}>
            {opt}
          </button>
        );
      })}
    </div>
  );
}
