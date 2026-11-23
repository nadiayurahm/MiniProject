import React from 'react';

export default function HeaderNav({ currentScene, setScene }) {
  const scenes = [
    { id: 1, label: 'GREETING', code: '01' },
    { id: 2, label: 'UNBOX', code: '02' },
    { id: 3, label: 'DOSSIER', code: '03' },
    { id: 4, label: 'RSVP & FIT', code: '04' }
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        backgroundColor: 'rgba(7, 13, 30, 0.94)',
        backdropFilter: 'blur(12px)',
        borderBottom: '2px solid rgba(139, 92, 246, 0.25)',
        padding: '8px 16px'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          flexWrap: 'wrap'
        }}
      >
        {/* Brand / Streetwear Packaging Tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#112042',
              border: '1.5px solid var(--color-accent-purple)',
              padding: '2px 8px',
              borderRadius: '2px'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ffe600', display: 'inline-block' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: '#f8f9fc', letterSpacing: '0.08em' }}>
              DHANI-2811
            </span>
          </div>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--color-metallic-silver)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              opacity: 0.8
            }}
          >
            SPEC-EDITION // BD-LUNCH
          </span>
        </div>

        {/* Scene Navigation Steps */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }} aria-label="Scene navigation">
          {scenes.map((s) => {
            const isActive = currentScene === s.id;
            const isPassed = currentScene > s.id;
            return (
              <button
                key={s.id}
                onClick={() => setScene(s.id)}
                title={`Lompat ke Scene ${s.code} - ${s.label}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '5px 10px',
                  borderRadius: '3px',
                  border: isActive
                    ? '1.5px solid #ffe600'
                    : isPassed
                    ? '1px solid var(--color-navy-border)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  backgroundColor: isActive
                    ? '#182b54'
                    : isPassed
                    ? 'rgba(17, 32, 66, 0.6)'
                    : 'transparent',
                  color: isActive ? '#ffe600' : isPassed ? 'var(--color-metallic-silver)' : 'rgba(255,255,255,0.4)',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: isActive ? '0 0 10px rgba(139, 92, 246, 0.35)' : 'none'
                }}
              >
                <span style={{ fontWeight: 800, color: isActive ? '#ffe600' : 'inherit' }}>{s.code}</span>
                <span style={{ fontWeight: 600 }}>{s.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
