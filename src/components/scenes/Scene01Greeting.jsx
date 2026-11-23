import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Sticker from '../common/Sticker';
import Barcode from '../common/Barcode';
import StarBurst from '../common/StarBurst';
import ProductLabel from '../common/ProductLabel';

export default function Scene01Greeting({ onNext, eventData }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        gsap.set('.anim-elem', { opacity: 1, y: 0, scale: 1 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.anim-topbar',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
        .fromTo(
          '.anim-poster',
          { opacity: 0, scale: 0.95, y: 25 },
          { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'back.out(1.1)' },
          '-=0.2'
        )
        .fromTo(
          '.anim-title-word',
          { opacity: 0, y: 40, skewX: 10 },
          { opacity: 1, y: 0, skewX: 0, duration: 0.6, stagger: 0.12 },
          '-=0.3'
        )
        .fromTo(
          '.anim-sticker-item',
          { opacity: 0, scale: 0.4, rotate: -25 },
          { opacity: 1, scale: 1, rotate: (i, t) => parseFloat(t.getAttribute('data-rot') || 0), duration: 0.5, stagger: 0.08, ease: 'back.out(1.6)' },
          '-=0.2'
        )
        .fromTo(
          '.anim-cta',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
          '-=0.1'
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
      {/* Editorial Streetwear Poster Card */}
      <div
        className="anim-poster foil-pouch corner-crosshair"
        style={{
          width: '100%',
          maxWidth: '860px',
          position: 'relative',
          padding: '0 0 28px',
          margin: '0 auto'
        }}
      >
        {/* Top Packaging Crimp Seal Bar */}
        <div className="foil-crimp" />

        {/* Technical Ticker Tape Header */}
        <div
          className="anim-topbar"
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
            <span style={{ color: '#ffe600', fontWeight: 800 }}>★ ARCHIVE 2026</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ backgroundColor: '#182b54', padding: '1px 6px', borderRadius: '2px', color: '#c4b5fd', border: '1px solid #8b5cf6' }}>
              VIP ACCESS
            </span>
            <span style={{ color: 'var(--color-metallic-silver)' }}>MAMAS DAY CELEBRATION</span>
          </div>
        </div>

        {/* Poster Body */}
        <div style={{ padding: '36px 24px 20px', position: 'relative' }}>
          {/* Authentic Floating Stickers - User's Custom Details */}
          <div
            className="anim-sticker-item"
            data-rot="-8"
            style={{
              position: 'absolute',
              top: '28px',
              left: '20px',
              zIndex: 15
            }}
          >
            <StarBurst text="MAMAS" subtext="SPECIAL FOR" size={115} rotate={0} color="#ffe600" />
          </div>

          <div
            className="anim-sticker-item"
            data-rot="8"
            style={{
              position: 'absolute',
              top: '16px',
              right: '20px',
              zIndex: 15
            }}
          >
            <Sticker variant="chrome" rotate={8} size="md">
              PRESENT BY NANA
            </Sticker>
          </div>

          <div
            className="anim-sticker-item"
            data-rot="-5"
            style={{
              position: 'absolute',
              bottom: '90px',
              right: '18px',
              zIndex: 15
            }}
          >
            <Sticker variant="yellow" rotate={-5} size="sm">
              MEMORABLE PLACE
            </Sticker>
          </div>

          {/* Central Typographic Layout */}
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            {/* Tagline Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 14px',
                backgroundColor: 'rgba(7, 13, 30, 0.8)',
                border: '1px solid #8b5cf6',
                borderRadius: '999px',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: '#c4b5fd',
                letterSpacing: '0.1em',
                marginBottom: '16px',
                boxShadow: '0 0 12px rgba(139, 92, 246, 0.25)'
              }}
            >
              <span>●</span>
              <span>SPECIAL EDITION 2026</span>
            </div>

            {/* Huge Headline */}
            <h1
              style={{
                fontSize: 'clamp(3.2rem, 9.5vw, 6.2rem)',
                fontWeight: 900,
                lineHeight: 0.9,
                margin: '0 0 16px',
                textTransform: 'uppercase',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                alignItems: 'center'
              }}
            >
              <span
                className="anim-title-word"
                style={{
                  display: 'inline-block',
                  color: '#f8f9fc',
                  letterSpacing: '-0.02em',
                  textShadow: '3px 3px 0px #030712, 0 0 25px rgba(27, 47, 99, 0.8)'
                }}
              >
                HAPPY BIRTHDAY
              </span>
              <span
                className="anim-title-word"
                style={{
                  display: 'inline-block',
                  color: '#ffe600',
                  letterSpacing: '-0.01em',
                  textShadow: '4px 4px 0px #070d1e, 0 0 20px rgba(255, 230, 0, 0.3)'
                }}
              >
                {eventData.celebrant}
              </span>
            </h1>

            {/* Editorial Description */}
            <p
              style={{
                fontSize: 'clamp(0.95rem, 2.2vw, 1.15rem)',
                color: 'var(--color-metallic-silver)',
                lineHeight: 1.5,
                margin: '0 auto 28px',
                fontWeight: 500,
                maxWidth: '520px'
              }}
            >
              Selamat ulang tahun sayangku yang ganteng sedunia. Semoga semakin berkah di umur baru ini ya ganteng cintanya aku, semoga doa baik selalu menyertaimu di tahun ini.  I Love u mamasku sayang !!!!
            </p>

            {/* Asymmetric Technical Grid: Barcode + Product Spec Label */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                margin: '0 auto 32px',
                flexWrap: 'wrap'
              }}
            >
              <div className="anim-sticker-item" data-rot="-2">
                <Barcode code="2011-DHANI-BDAY" spec="SPECIAL EVENT 2026" />
              </div>
              <div className="anim-sticker-item" data-rot="3">
                <ProductLabel itemNo="LUVU#2011" product="BIRTHDAY LUNCH" edition="NANAED.2026" status="READY TO UNBOX" />
              </div>
            </div>

            {/* CTA Button */}
            <div className="anim-cta">
              <button
                type="button"
                onClick={onNext}
                className="btn-street btn-street-chrome"
                style={{
                  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                  padding: '16px 42px',
                  borderRadius: '6px'
                }}
              >
                <span>PENASARAN?</span>
                <span style={{ fontSize: '1.4em', lineHeight: 1 }}>→</span>
              </button>
              <div
                style={{
                  marginTop: '10px',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-metallic-silver)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  opacity: 0.8
                }}
              >
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Packaging Crimp Seal Bar */}
        <div className="foil-crimp" style={{ marginTop: '16px' }} />
      </div>
    </section>
  );
}
