(()=>{
const { Button, IconButton } = window.WayixDesignSystem_d17f72;
function Splash({onStart}){return <div style={{flex:1,display:'flex',flexDirection:'column',position:'relative',padding:'0 24px 32px'}}>
<div style={{position:'absolute',top:-80,right:-60,width:340,height:340,background:'radial-gradient(circle,var(--color-accent-glow),transparent 60%)',pointerEvents:'none'}}/>
<div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',position:'relative'}}>
<div style={{fontFamily:'var(--font-brand)',fontSize:56,fontWeight:600,letterSpacing:'-.01em',marginBottom:24}}>RideInSync</div>
<div style={{fontSize:22,lineHeight:'30px',maxWidth:300}}><span style={{color:'var(--color-text-secondary)'}}>Just </span><b>tell us</b><span style={{color:'var(--color-text-secondary)'}}> where you're headed, and RideInSync </span><b>handles</b><span style={{color:'var(--color-text-secondary)'}}> the route.</span></div>
</div>
<div style={{display:'flex',justifyContent:'center',marginBottom:24}}><IconButton name="play" variant="accent" size={72} iconSize={30}/></div>
<Button onClick={onStart}>Get started</Button></div>;}
Object.assign(window,{Splash});
})();