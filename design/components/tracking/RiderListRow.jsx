import React from 'react';
import { RoleBadge } from './RoleBadge.jsx';
const ROLE = { lead:'var(--color-role-lead)', sweep:'var(--color-role-sweep)', member:'var(--color-role-member)' };
export function RiderListRow({ name, role = 'member', initials, distance, status = 'On route', you = false, style }) {
  const c = ROLE[role] || ROLE.member;
  const off = status !== 'On route';
  return (
    <div style={{ display:'flex', alignItems:'center', gap:'var(--space-md)', padding:'12px 0',
      borderBottom:'1px solid var(--color-divider)', ...style }}>
      <div style={{ width:36, height:36, flex:'none', borderRadius:'var(--radius-full)', background:c,
        display:'flex', alignItems:'center', justifyContent:'center', color:'#0A0A0B', fontFamily:'var(--font-ui)',
        fontSize:14, fontWeight:700 }}>{initials || name?.slice(0,2).toUpperCase()}</div>
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <span style={{ color:'var(--color-text-primary)', fontSize:15, fontWeight:600, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{name}{you?' (you)':''}</span>
          <RoleBadge role={role} />
        </div>
        <div style={{ color: off ? 'var(--color-role-sweep)' : 'var(--color-text-secondary)', fontSize:12, marginTop:2 }}>{status}</div>
      </div>
      {distance != null && <span style={{ color:'var(--color-text-primary)', fontFamily:'var(--font-numeric)',
        fontVariantNumeric:'tabular-nums', fontSize:14, fontWeight:600, flex:'none' }}>{distance}</span>}
    </div>
  );
}
