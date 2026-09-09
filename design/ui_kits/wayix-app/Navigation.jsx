(()=>{
const { NavInfoCard, TransportBar, IconButton, Icon } = window.WayixDesignSystem_d17f72;
function Navigation({onExit,onGroup}){const[playing,setPlaying]=React.useState(true);
return <div style={{flex:1,position:'relative',display:'flex',flexDirection:'column'}}>
<div style={{position:'absolute',inset:0}}><window.MiniMap height="100%" round={false}/></div>
<div style={{position:'relative',padding:16,display:'flex',flexDirection:'column',gap:12,height:'100%'}}>
<div style={{display:'flex',gap:12}}><div style={{flex:1}}><NavInfoCard icon="incline" metric="30 ft" descriptor="Slight incline · +5%" progress={40}/></div>
<IconButton name="chevron-left" variant="surface" size={44} onClick={onExit} style={{alignSelf:'flex-start',background:'var(--color-surface-1)'}}/></div>
<div><NavInfoCard icon="turn-right" metric="90 ft" descriptor="Turn right · 4th St" progress={70}/></div>
<div style={{flex:1}}/>
<div onClick={onGroup} role="button" style={{cursor:'pointer',display:'flex',alignItems:'center',gap:10,padding:'10px 14px',background:'var(--color-surface-1)',borderRadius:'var(--radius-full)',boxShadow:'var(--shadow-card)'}}>
<span style={{display:'flex'}}><Icon name="navigation" size={18} color="var(--color-role-lead)"/></span>
<span style={{flex:1,fontSize:13,fontWeight:600,color:'var(--color-text-primary)'}}>Group ride · 5 riders</span>
<span style={{fontSize:12,color:'var(--color-role-sweep)',fontWeight:600}}>1 behind</span>
<Icon name="chevron-right" size={18} color="var(--color-text-secondary)"/></div>
<TransportBar startLabel="0 ft" endLabel="1.4 mi" progress={38} playing={playing} onToggle={()=>setPlaying(!playing)}/></div></div>;}
Object.assign(window,{Navigation});
})();