(()=>{
const { Button, Input, BackButton } = window.WayixDesignSystem_d17f72;
function Onboarding({onNext,onBack}){const[name,setName]=React.useState('');
return <div style={{flex:1,display:'flex',flexDirection:'column',padding:'8px 24px 32px'}}>
<BackButton onClick={onBack}/>
<div style={{marginTop:24,flex:1}}>
<div style={{fontSize:24,lineHeight:'30px',fontWeight:600,marginBottom:8}}>Welcome aboard.</div>
<div style={{fontSize:16,color:'var(--color-text-secondary)',marginBottom:24}}>What should we call you?</div>
<Input placeholder="Your name" value={name} onChange={e=>setName(e.target.value)}/></div>
<Button disabled={!name.trim()} onClick={onNext}>Next</Button></div>;}
Object.assign(window,{Onboarding});
})();