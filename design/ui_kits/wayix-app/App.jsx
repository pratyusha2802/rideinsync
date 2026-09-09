(()=>{
const { ConnectionCard, Button } = window.WayixDesignSystem_d17f72;
function Connect({onNext,onBack}){const[c,setC]=React.useState(false);
React.useEffect(()=>{const t=setTimeout(()=>setC(true),1400);return()=>clearTimeout(t);},[]);
return <div style={{flex:1,display:'flex',flexDirection:'column',padding:'8px 24px 32px'}}>
<div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',gap:24}}>
<div style={{fontSize:24,fontWeight:600,textAlign:'center'}}>Connecting your device</div>
<ConnectionCard status={c?'Connected':'Pairing over Bluetooth…'} connected={c}/></div>
<Button disabled={!c} onClick={onNext}>Confirm</Button></div>;}

function App(){const[screen,setScreen]=React.useState('splash');const go=s=>()=>setScreen(s);
const map={splash:<window.Splash onStart={go('name')}/>,
name:<window.Onboarding onNext={go('connect')} onBack={go('splash')}/>,
connect:<Connect onNext={go('prefs')} onBack={go('name')}/>,
prefs:<window.Preferences onNext={go('voice')} onBack={go('connect')}/>,
voice:<window.Voice onNext={go('preview')} onBack={go('prefs')}/>,
preview:<window.RoutePreview onNext={go('nav')} onBack={go('voice')}/>,
nav:<window.Navigation onExit={go('preview')} onGroup={go('group')}/>,
group:<window.GroupRide onBack={go('nav')}/>};
return <window.PhoneFrame>{map[screen]}</window.PhoneFrame>;}
Object.assign(window,{App,Connect});
})();