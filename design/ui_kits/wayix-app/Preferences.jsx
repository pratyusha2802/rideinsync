(()=>{
const { Button, BackButton, SegmentedControl, Stepper, Icon } = window.WayixDesignSystem_d17f72;
function Section({title,children}){return <div style={{marginBottom:32}}><div style={{fontSize:20,fontWeight:600,marginBottom:16}}>{title}</div>{children}</div>;}
function Row({label,children}){return <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 0',gap:16}}>
<span style={{fontSize:14,fontWeight:500,color:'var(--color-text-secondary)'}}>{label}</span>{children}</div>;}
function Preferences({onNext,onBack}){const[incline,setIncline]=React.useState(10);const[effort,setEffort]=React.useState('Medium');const[dist,setDist]=React.useState(2);
return <div style={{flex:1,display:'flex',flexDirection:'column'}}>
<div style={{padding:'8px 24px 0',flex:'none'}}><BackButton onClick={onBack}/><div style={{fontSize:24,fontWeight:600,margin:'16px 0 8px'}}>My preferences</div></div>
<div style={{flex:1,overflowY:'auto',padding:'16px 24px'}}>
<Section title="What matters most">
<Row label="Max incline"><Stepper value={incline} display={incline+'%'} min={0} max={30} step={5} onChange={setIncline}/></Row>
<Row label="Effort level"><div style={{width:200}}><SegmentedControl value={effort} onChange={setEffort}/></div></Row>
<Row label="Trip distance cap"><Stepper value={dist} display={dist+' mi'} min={1} max={10} onChange={setDist}/></Row>
</Section>
<Section title="My device">
<div style={{display:'flex',alignItems:'center',gap:12,padding:'12px 16px',background:'var(--color-surface-2)',borderRadius:'var(--radius-md)'}}>
<Icon name="projector" size={22} color="var(--color-accent)"/><div style={{flex:1}}><div style={{fontSize:14,fontWeight:600}}>RideInSync Beam Pro</div><div style={{fontSize:12,color:'var(--color-text-secondary)'}}>Connected · Bluetooth</div></div>
<Icon name="check" size={20} color="var(--color-accent)"/></div>
</Section></div>
<div style={{padding:'0 24px 32px',flex:'none'}}><Button onClick={onNext}>Confirm</Button></div></div>;}
Object.assign(window,{Preferences});
})();