import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Checkpoint({ index = 1, label, reached = false, finish = false, size = 30, style }) {
  const c = reached ? 'var(--color-checkpoint-reached)' : 'var(--color-checkpoint-upcoming)';
  return (
    <div style={{ display:'inline-flex', flexDirection:'column', alignItems:'center', gap:4, ...style }}>
      <div style={{ width:size, height:size, borderRadius:'var(--radius-full)',
        background: reached ? c : 'var(--color-surface-2)', border:'2px solid '+c,
        display:'flex', alignItems:'center', justifyContent:'center',
        boxShadow:'0 0 0 3px var(--color-bg-base)' }}>
        {finish ? <Icon name="flag" size={size*0.5} color={reached?'var(--color-text-on-accent)':c} />
          : <span style={{ color: reached ? 'var(--color-text-on-accent)' : c,
              fontFamily:'var(--font-ui)', fontSize:size*0.42, fontWeight:700 }}>{index}</span>}
      </div>
      {label && <span style={{ color:'var(--color-text-secondary)', fontFamily:'var(--font-ui)', fontSize:11, whiteSpace:'nowrap' }}>{label}</span>}
    </div>
  );
}
