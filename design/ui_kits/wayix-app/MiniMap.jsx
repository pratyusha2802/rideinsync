(()=>{
function MiniMap({height=200,round=true}){return <div style={{height,borderRadius:round?'var(--radius-md)':0,overflow:'hidden',position:'relative',background:'var(--color-bg-void)',backgroundImage:'linear-gradient(90deg,transparent 39px,rgba(138,138,142,.18) 40px),linear-gradient(0deg,transparent 39px,rgba(138,138,142,.18) 40px),linear-gradient(120deg,transparent 79px,rgba(138,138,142,.22) 80px)',backgroundSize:'40px 40px,40px 40px,160px 160px'}}>
<svg width="100%" height="100%" style={{position:'absolute',inset:0}} preserveAspectRatio="none" viewBox="0 0 300 200">
<path d="M20 180 L90 150 L120 90 L200 70 L260 30" fill="none" stroke="var(--color-accent-deep)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 180 L90 150 L120 90 L200 70 L260 30" fill="none" stroke="var(--color-accent-bright)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="20" cy="180" r="9" fill="var(--color-accent)" stroke="var(--color-bg-void)" strokeWidth="3"/>
<circle cx="260" cy="30" r="7" fill="var(--color-bg-void)" stroke="var(--color-accent)" strokeWidth="3"/></svg></div>;}
Object.assign(window,{MiniMap});
})();