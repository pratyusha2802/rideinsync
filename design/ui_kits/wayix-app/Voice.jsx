(()=>{
const { Button, BackButton, VoiceBlob } = window.WayixDesignSystem_d17f72;
function Voice({onNext,onBack}){const[state,setState]=React.useState('idle');const[msg,setMsg]=React.useState(null);
React.useEffect(()=>{const a=setTimeout(()=>setState('listening'),700);const b=setTimeout(()=>{setState('speaking');setMsg('Take me to the Ferry Building');},2200);const c=setTimeout(()=>setState('idle'),3600);return()=>{clearTimeout(a);clearTimeout(b);clearTimeout(c);};},[]);
return <div style={{flex:1,display:'flex',flexDirection:'column',padding:'8px 24px 32px'}}>
<BackButton onClick={onBack}/>
<div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',gap:24}}>
<div style={{fontSize:20,color:'var(--color-text-secondary)',textAlign:'center'}}>{state==='listening'?'Listening…':state==='speaking'?'Got it':'Where would you like to go?'}</div>
{msg&&<div style={{alignSelf:'flex-end',maxWidth:'80%',padding:'12px 16px',background:'var(--color-surface-2)',borderRadius:'20px 20px 4px 20px',fontSize:16}}>{msg}</div>}</div>
<div style={{display:'flex',justifyContent:'center',marginBottom:16}}><VoiceBlob state={state} size={240}/></div>
<Button onClick={onNext}>Preview route</Button></div>;}
Object.assign(window,{Voice});
})();