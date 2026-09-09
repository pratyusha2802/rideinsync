import React from 'react';
const CFG = { lead:{c:'var(--color-role-lead)',t:'var(--color-text-on-accent)',l:'Lead'},
  sweep:{c:'var(--color-role-sweep)',t:'#1A0A06',l:'Sweep'},
  member:{c:'var(--color-role-member)',t:'#04121C',l:'Member'} };
export function RoleBadge({ role = 'member', style }) {
  const r = CFG[role] || CFG.member;
  return <span style={{ display:'inline-flex', alignItems:'center', height:22, padding:'0 10px',
    borderRadius:'var(--radius-full)', background:r.c, color:r.t, fontFamily:'var(--font-ui)',
    fontSize:12, fontWeight:'var(--weight-semibold)', lineHeight:1, ...style }}>{r.l}</span>;
}
