(()=>{
const { Button, BackButton, TurnRow, Card } = window.WayixDesignSystem_d17f72;
function RoutePreview({onNext,onBack}){return <div style={{flex:1,display:'flex',flexDirection:'column'}}>
<div style={{padding:'8px 24px 0',flex:'none'}}><BackButton onClick={onBack}/><div style={{fontSize:24,fontWeight:600,margin:'16px 0 12px'}}>Ferry Building</div></div>
<div style={{flex:1,overflowY:'auto',padding:'0 24px'}}>
<window.MiniMap height={180}/>
<Card style={{margin:'16px 0',display:'flex',justifyContent:'space-between'}}><div><div style={{fontSize:12,color:'var(--color-text-secondary)'}}>Time</div><div style={{fontSize:20,fontWeight:600}}>18 min</div></div>
<div><div style={{fontSize:12,color:'var(--color-text-secondary)'}}>Distance</div><div style={{fontSize:20,fontWeight:600}}>1.4 mi</div></div>
<div><div style={{fontSize:12,color:'var(--color-text-secondary)'}}>Max incline</div><div style={{fontSize:20,fontWeight:600,color:'var(--color-accent)'}}>+5%</div></div></Card>
<div style={{marginBottom:8}}><TurnRow icon="straight" distance="120 ft" street="Continue on Market St"/>
<TurnRow icon="incline" distance="300 ft" street="Slight incline ahead"/>
<TurnRow icon="turn-right" distance="90 ft" street="4th St"/>
<TurnRow icon="flag" distance="0.2 mi" street="Arrive at Ferry Building"/></div></div>
<div style={{padding:'12px 24px 32px',flex:'none',display:'flex',gap:12}}><Button variant="secondary" fullWidth={false} onClick={onBack}>Back</Button><Button onClick={onNext}>Start</Button></div></div>;}
Object.assign(window,{RoutePreview});
})();