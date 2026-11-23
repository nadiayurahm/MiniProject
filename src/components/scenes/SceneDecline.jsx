import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function SceneDecline() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.decline-content',
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: 'back.out(1.2)' }
      );
      gsap.fromTo(
        '.decline-emoji',
        { rotate: -20, scale: 0 },
        { rotate: 0, scale: 1, duration: 0.5, delay: 0.3, ease: 'back.out(2)' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        minHeight: 'calc(100vh - 60px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}
    >
      {/* Label atas */}
      <div
        style={{
          backgroundColor: '#182b54',
          color: '#c4b5fd',
          border: '1px solid #8b5cf6',
          padding: '3px 12px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          fontWeight: 800,
          borderRadius: '2px',
          letterSpacing: '0.08em',
          marginBottom: '28px'
        }}
      >
        RSVP // STATUS: TIDAK HADIR
      </div>

      {/* Card utama */}
      <div
        className="decline-content"
        style={{
          backgroundColor: '#0c1630',
          border: '2px solid #223a6d',
          borderRadius: '8px',
          padding: '48px 36px',
          maxWidth: '480px',
          width: '100%',
          boxShadow: '6px 6px 0px #070d1e, 0 0 30px rgba(139, 92, 246, 0.15)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative top bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'repeating-linear-gradient(90deg, #8b5cf6 0px, #8b5cf6 8px, transparent 8px, transparent 16px)'
          }}
        />

        {/* Emoji */}
        <div
          className="decline-emoji"
          style={{ fontSize: '4rem', marginBottom: '20px', display: 'block' }}
        >
          🫶
        </div>

        {/* Judul */}
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
            color: '#f8f9fc',
            letterSpacing: '0.03em',
            lineHeight: 1.05,
            marginBottom: '16px',
            textShadow: '2px 2px 0px #070d1e'
          }}
        >
          OKEY, TERIMAKASIH!
        </h2>

        {/* Pesan */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            color: '#c4b5fd',
            lineHeight: 1.6,
            marginBottom: '28px'
          }}
        >
          Semoga bisa di lain waktu ya 🌙
          <br />
          <span style={{ color: 'var(--color-metallic-silver)', fontSize: '0.9rem' }}>
            Sampai jumpa!
          </span>
        </p>

        {/* Divider */}
        <div
          style={{
            borderTop: '1.5px dashed #223a6d',
            marginBottom: '20px'
          }}
        />

        {/* Label bawah */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: '#475569',
            letterSpacing: '0.1em'
          }}
        >
          SEE YOU NEXT EVENT
        </div>
      </div>
    </section>
  );
}
