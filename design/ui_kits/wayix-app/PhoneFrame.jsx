(()=>{
const { Icon } = window.WayixDesignSystem_d17f72;
function StatusBar(){return <div style={{height:44,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 24px',fontSize:14,fontWeight:600,color:'var(--color-text-primary)',flex:'none'}}>
<span style={{fontVariantNumeric:'tabular-nums'}}>9:41</span>
<span style={{display:'flex',gap:6,alignItems:'center',fontSize:12}}>􀙇 􀛨 <span style={{fontVariantNumeric:'tabular-nums'}}>􀺸</span></span></div>;}
function PhoneFrame({children}){return <div style={{width:390,height:844,background:'var(--color-bg-base)',borderRadius:44,overflow:'hidden',position:'relative',boxShadow:'0 40px 100px rgba(0,0,0,.6),0 0 0 10px #050506,0 0 0 12px #2A2A2D',display:'flex',flexDirection:'column'}}>
<StatusBar/>
<div style={{flex:1,minHeight:0,position:'relative',display:'flex',flexDirection:'column'}}>{children}</div>
<div style={{position:'absolute',bottom:8,left:'50%',transform:'translateX(-50%)',width:134,height:5,borderRadius:3,background:'rgba(255,255,255,.5)'}}/></div>;}
Object.assign(window,{PhoneFrame,StatusBar});
})();