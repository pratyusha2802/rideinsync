import React from 'react';
import { Icon } from '../core/Icon.jsx';
const ROLE = { lead:'var(--color-role-lead)', sweep:'var(--color-role-sweep)', member:'var(--color-role-member)' };
export function RiderMarker({ role = 'member', label, initials, heading = 0, you = false, size = 40, style }) {
  const c = ROLE[role] || ROLE.member;
  const ink = role === 'lead' ? 'var(--color-text-on-accent)' : '#0A0A0B';
  return (
    <div style={{ display:'inline-flex', flexDirection:'column', alignItems:'center', gap:4, ...style }}>
      <div style={{ position:'relative', width:size, height:size, borderRadius:'var(--radius-full)',
        background:c, display:'flex', alignItems:'center', justifyContent:'center',
        boxShadow:'0 0 0 3px var(--color-bg-base), 0 4px 12px rgba(0,0,0,.5)'+(you?', 0 0 0 6px '+c+'55':'') }}>
        {role === 'lead'
          ? <div style={{ transform:'rotate('+heading+'deg)' }}><Icon name="navigation" size={size*0.5} color={ink} /></div>
          : role === 'sweep'
          ? <Icon name="flag" size={size*0.5} color={ink} />
          : <span style={{ color:ink, fontFamily:'var(--font-ui)', fontSize:size*0.34, fontWeight:700 }}>{initials || '·'}</span>}
      </div>
      {label && <span style={{ padding:'2px 6px', borderRadius:6, background:'var(--color-surface-1)',
        color:'var(--color-text-primary)', fontFamily:'var(--font-ui)', fontSize:11, fontWeight:600, whiteSpace:'nowrap' }}>{label}</span>}
    </div>
  );
}
