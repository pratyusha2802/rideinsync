(()=>{
const { GroupMap, RiderListRow, BackButton, Icon } = window.WayixDesignSystem_d17f72;
const riders=[
  {name:'Mara Ko',role:'lead',distance:'—',status:'On route'},
  {name:'You',role:'member',initials:'JD',distance:'0.3 mi',status:'On route',you:true},
  {name:'Amir Lee',role:'member',initials:'AL',distance:'0.6 mi',status:'On route'},
  {name:'Priya N.',role:'member',initials:'PN',distance:'0.9 mi',status:'Fell behind'},
  {name:'Theo Vance',role:'sweep',distance:'1.4 mi',status:'On route'},
];
function GroupRide({onBack}){return <div style={{flex:1,display:'flex',flexDirection:'column'}}>
  <div style={{position:'absolute',inset:0}}><GroupMap round={false} height="100%"/></div>
  <div style={{position:'relative',padding:'12px 16px 0',display:'flex',alignItems:'center',gap:8}}>
    <div style={{background:'var(--color-surface-1)',borderRadius:999}}><BackButton onClick={onBack}/></div>
    <div style={{background:'var(--color-surface-1)',borderRadius:999,padding:'8px 14px',fontSize:13,fontWeight:600,display:'flex',alignItems:'center',gap:8,boxShadow:'var(--shadow-card)'}}>
      <span style={{width:8,height:8,borderRadius:999,background:'var(--color-accent)'}}/>Sunday Ridge Loop · 5 riders</div>
  </div>
  <div style={{flex:1}}/>
  <div style={{position:'relative',background:'var(--color-surface-1)',borderRadius:'var(--radius-lg) var(--radius-lg) 0 0',boxShadow:'var(--shadow-card)',padding:'16px 20px 24px',maxHeight:'52%',overflowY:'auto'}}>
    <div style={{width:40,height:4,borderRadius:999,background:'var(--color-surface-3)',margin:'0 auto 14px'}}/>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:6}}>
      <div style={{fontSize:18,fontWeight:600}}>Group</div>
      <div style={{fontSize:13,color:'var(--color-text-secondary)'}}>Checkpoint 2 / 4 · Overlook next</div>
    </div>
    {riders.map((r,i)=><RiderListRow key={i} {...r}/>)}
  </div>
</div>;}
Object.assign(window,{GroupRide});
})();