import React from 'react';

export function VoiceBlob({ state = 'idle', size = 220, style }) {
  const active = state !== 'idle';
  const h = state === 'speaking' ? size * 0.9 : state === 'listening' ? size * 0.7 : size * 0.42;
  return (
    <div style={{ position: 'relative', width: size, height: size * 0.6, display: 'flex',
      alignItems: 'flex-end', justifyContent: 'center', ...style }}>
      <div style={{ position: 'absolute', bottom: 0, width: size, height: size * 0.9,
        background: 'radial-gradient(60% 60% at 50% 100%, var(--color-accent-glow), transparent 70%)' }} />
      <div style={{ position: 'relative', width: size * 0.82, height: h, borderRadius: '50% 50% 42% 42% / 70% 70% 40% 40%',
        background: active
          ? 'radial-gradient(120% 100% at 50% 100%, var(--color-accent-bright), var(--color-accent-deep))'
          : 'radial-gradient(120% 100% at 50% 100%, var(--color-accent), var(--color-accent-deep))',
        opacity: active ? 1 : 0.85, transition: 'height .3s ease, opacity .3s ease',
        boxShadow: '0 0 60px 10px var(--color-accent-glow)' }} />
    </div>
  );
}
