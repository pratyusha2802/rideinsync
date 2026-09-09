import React from 'react';
import { RiderMarker } from './RiderMarker.jsx';
import { Checkpoint } from './Checkpoint.jsx';

const ROUTE = 'M40 300 C 90 250, 90 190, 150 180 S 240 150, 250 100 S 300 50, 340 60';
const DEF_CHECKS = [
  { index:1, x:40, y:300, reached:true, label:'Start' },
  { index:2, x:150, y:180, reached:true, label:'Bridge café' },
  { index:3, x:250, y:100, reached:false, label:'Overlook' },
  { index:0, x:340, y:60, finish:true, reached:false, label:'Summit' },
];
const DEF_RIDERS = [
  { role:'lead', x:250, y:100, label:'Mara', heading:35 },
  { role:'member', x:200, y:150, initials:'JD', you:true },
  { role:'member', x:120, y:200, initials:'AL' },
  { role:'sweep', x:80, y:250, label:'Theo' },
];
export function GroupMap({ riders = DEF_RIDERS, checkpoints = DEF_CHECKS, route = ROUTE, height = 360, round = true, style }) {
  return (
    <div style={{ position:'relative', height, borderRadius: round ? 'var(--radius-lg)' : 0, overflow:'hidden',
      background:'var(--color-bg-void)',
      backgroundImage:'linear-gradient(90deg,transparent 47px,rgba(138,138,142,.14) 48px),linear-gradient(0deg,transparent 47px,rgba(138,138,142,.14) 48px)',
      backgroundSize:'48px 48px,48px 48px', ...style }}>
      <svg viewBox="0 0 380 340" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ position:'absolute', inset:0 }}>
        <path d={route} fill="none" stroke="var(--color-accent-deep)" strokeWidth="9" strokeLinecap="round" />
        <path d={route} fill="none" stroke="var(--color-accent-bright)" strokeWidth="5" strokeLinecap="round" />
      </svg>
      {checkpoints.map((c,i) => (
        <div key={'c'+i} style={{ position:'absolute', left:(c.x/380*100)+'%', top:(c.y/340*100)+'%', transform:'translate(-50%,-50%)', zIndex:1 }}>
          <Checkpoint index={c.index} label={c.label} reached={c.reached} finish={c.finish} />
        </div>
      ))}
      {riders.map((r,i) => (
        <div key={'r'+i} style={{ position:'absolute', left:(r.x/380*100)+'%', top:(r.y/340*100)+'%', transform:'translate(-50%,-50%)', zIndex:2 }}>
          <RiderMarker {...r} />
        </div>
      ))}
    </div>
  );
}
