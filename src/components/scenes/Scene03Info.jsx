import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Sticker from '../common/Sticker';
import Barcode from '../common/Barcode';
import StarBurst from '../common/StarBurst';

export default function Scene03Info({ onNext, onPrev, eventData }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        gsap.set('.anim-dossier, .anim-dossier-item', { opacity: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.anim-dossier',
        { opacity: 0, scale: 0.96, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'back.out(1.1)' }
      )
        .fromTo(
          '.anim-dossier-item',
          { opacity: 0, x: -15 },
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.08 },
          '-=0.2'
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
        justifyContent: 'center',
        alignItems: 'center',
        padding: '24px 16px 50px',
        position: 'relative',
        zIndex: 1
      }}
    >
      {/* Scene Header */}
      <div style={{ textAlign: 'center', marginBottom: '22px', maxWidth: '640px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span
            style={{
              backgroundColor: '#182b54',
              color: '#c4b5fd',
              border: '1px solid #8b5cf6',
              padding: '2px 8px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 800,
              borderRadius: '2px'
            }}
          >
            ★ SAVE THE DATE ★
          </span>
          <span style={{ fontSize: '0.75rem', color: '#ffe600', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>

          </span>
        </div>
        <h2
          style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
            color: '#f8f9fc',
            textShadow: '3px 3px 0px #070d1e'
          }}
        >
          {eventData.eventName}
        </h2>
      </div>

      {/* Main Boarding Pass / Tactical Event Dossier Card */}
      <div
        className="anim-dossier foil-pouch corner-crosshair"
        style={{
          width: '100%',
          maxWidth: '820px',
          margin: '0 auto 28px',
          position: 'relative',
          padding: '0 0 24px'
        }}
      >
        {/* Top Foil Crimp Bar */}
        <div className="foil-crimp" />

        {/* Tactical Header Bar */}
        <div
          style={{
            backgroundColor: '#070d1e',
            borderBottom: '1px solid #223a6d',
            padding: '8px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--color-metallic-silver)',
            flexWrap: 'wrap',
            gap: '8px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#ffe600' }}>⌖ SPECIAL LUNCH </span>
          </div>
          <span style={{ backgroundColor: '#182b54', padding: '1px 8px', borderRadius: '2px', color: '#f8f9fc', border: '1px solid #8b5cf6' }}>
            CONFIDENTIAL ACCESS
          </span>
        </div>

        {/* Dossier Content Area */}
        <div style={{ padding: '28px 24px 10px', position: 'relative' }}>
          {/* Floating Accents */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              right: '20px',
              zIndex: 10
            }}
          >
            <StarBurst text="LUNCH" subtext="NO ESCAPE" size={90} color="#ffe600" rotate={8} />
          </div>

          {/* Date Section — Brutalist Typographic Block */}
          <div
            className="anim-dossier-item"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#070d1e',
              border: '2px solid var(--color-navy-border)',
              borderRadius: '6px',
              padding: '16px 22px',
              marginBottom: '20px',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5), 0 0 15px rgba(139, 92, 246, 0.15)',
              flexWrap: 'wrap',
              gap: '14px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(4rem, 10vw, 5.8rem)',
                  color: '#ffe600',
                  lineHeight: 0.82,
                  letterSpacing: '-0.02em',
                  textShadow: '3px 3px 0px rgba(3,7,18,0.9)'
                }}
              >
                28
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
                    color: '#f8f9fc',
                    lineHeight: 0.95,
                    letterSpacing: '0.04em'
                  }}
                >
                  NOVEMBER 2026
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#c4b5fd', fontWeight: 700, marginTop: '4px' }}>
                  BIRTHDAY LUNCH MAMAS
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
              <span style={{ backgroundColor: '#182b54', color: '#ffe600', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800, padding: '3px 10px', borderRadius: '3px', border: '1px solid #8b5cf6' }}>
                CONFIRMED DATE
              </span>
              <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--color-metallic-silver)' }}>
                CALENDAR VERIFIED #2811
              </span>
            </div>
          </div>

          {/* Perforated Divider */}
          <div className="perforated-divider" />

          {/* Grid: Time & Secret Location Details */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
              marginBottom: '22px'
            }}
          >
            {/* Box 1: Time */}

            <div
              className="anim-dossier-item card-street-light"
              style={{ padding: '18px 20px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #cbd5e1', paddingBottom: '6px', marginBottom: '8px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, color: '#182b54', letterSpacing: '0.05em' }}>
                  TIME
                </span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', color: '#112042', margin: '4px 0' }}>
                LUNCH TIME
              </div>
              <p style={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.4 }}>
                Jangan sampai telat ya, sayang. Perut kosongin, hati siapin dan kita bakal senang senang ngerayain hari spesial mamas!
              </p>
            </div>


            {/* Box 2: Location */}
            <div
              className="anim-dossier-item card-street-light"
              style={{ padding: '18px 20px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #cbd5e1', paddingBottom: '6px', marginBottom: '8px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 800, color: '#182b54', letterSpacing: '0.05em' }}>
                  VENUE
                </span>
                <span style={{ backgroundColor: '#112042', color: '#c4b5fd', padding: '1px 6px', borderRadius: '2px', fontSize: '0.68rem', fontWeight: 800, border: '1px solid #8b5cf6' }}>
                  VIP VENUE
                </span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', color: '#112042', margin: '4px 0' }}>
                {eventData.location}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 800, color: '#8b5cf6', marginBottom: '4px' }}>
                {eventData.locationDetails}
              </div>
              <p style={{ fontSize: '0.78rem', color: '#475569', lineHeight: 1.4 }}>
                Lokasinya masih rahasia yach nanti aku yang arahin langsung ke tempatnya. Can't wait to celebrate you mamas!
              </p>
            </div>
          </div>

          {/* Tactical Maps Directive Bar */}
          <div
            className="anim-dossier-item"
            style={{
              backgroundColor: '#070d1e',
              border: '1.5px dashed rgba(212, 216, 229, 0.4)',
              borderRadius: '6px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >



            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <button
                type="button"
                onClick={() => onNext()}
                className="btn-street btn-street-chrome"
                style={{
                  fontSize: '1.05rem',
                  padding: '10px 22px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                <span>APA YG PERLU DISIAPIN? </span>
                <span style={{ fontSize: '1.2rem' }}>➜</span>
              </button>
            </div>

          </div>
        </div>

        {/* Bottom Foil Crimp Bar */}
        <div className="foil-crimp" style={{ marginTop: '16px' }} />
      </div>
    </section>
  );
}
