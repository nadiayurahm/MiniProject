import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import Sticker from '../common/Sticker';
import Barcode from '../common/Barcode';

export default function Scene02Reveal({ onNext, onPrev, onDecline, eventData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [dragProgress, setDragProgress] = useState(0);

  const containerRef = useRef(null);
  const pouchTopRef = useRef(null);
  const trackRef = useRef(null);
  const handleRef = useRef(null);
  const stripCoverRef = useRef(null);
  const vipCardRef = useRef(null);
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.anim-pouch-box',
        { opacity: 0, scale: 0.94, y: 25 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'back.out(1.1)' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Trigger full tear animation
  const triggerTearAnimation = (startFromProgress = 0) => {
    if (isAnimating || isOpen) return;
    setIsAnimating(true);
    setIsDragging(false);
    isDraggingRef.current = false;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsOpen(true);
      setIsAnimating(false);
      return;
    }

    const trackWidth = trackRef.current ? trackRef.current.offsetWidth : 400;
    const currentX = startFromProgress * (trackWidth - 80);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsOpen(true);
        setIsAnimating(false);
      }
    });

    // 1. Vibrate pouch slightly on tear initiation
    tl.to('.anim-pouch-box', {
      x: -5,
      repeat: 3,
      yoyo: true,
      duration: 0.05
    })
      // 2. Animate pull tab zipping all the way to the right
      .fromTo(
        handleRef.current,
        { x: currentX },
        {
          x: trackWidth + 20,
          rotate: 15,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.in',
          onUpdate: function () {
            const prog = this.progress();
            const liveProg = startFromProgress + (1 - startFromProgress) * prog;
            setDragProgress(Math.min(1, liveProg));
          }
        }
      )
      // 3. Tear strip shreds away
      .to(
        stripCoverRef.current,
        {
          opacity: 0,
          scaleY: 0.2,
          duration: 0.35,
          ease: 'power2.in'
        },
        '-=0.3'
      )
      // 4. Pouch top flap folds open in 3D — fully hidden after fold
      .to(
        pouchTopRef.current,
        {
          rotateX: -110,
          transformOrigin: 'top center',
          opacity: 0,
          duration: 0.45,
          ease: 'power2.inOut',
          onComplete: () => {
            if (pouchTopRef.current) {
              pouchTopRef.current.style.visibility = 'hidden';
            }
          }
        },
        '-=0.15'
      )
      // 5. Slide out the Holographic VIP Pass Card
      .fromTo(
        vipCardRef.current,
        { y: 70, scale: 0.85, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.75, ease: 'back.out(1.3)' },
        '-=0.1'
      );
  };

  // Pointer Event Handlers for Dragging / Pulling the Seal
  const handlePointerDown = (e) => {
    if (isOpen || isAnimating) return;
    setIsDragging(true);
    isDraggingRef.current = true;
    startXRef.current = e.clientX - dragX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current || isOpen || isAnimating) return;
    const track = trackRef.current;
    if (!track) return;

    const trackWidth = track.offsetWidth;
    const maxDrag = Math.max(1, trackWidth - 85); // handle width ~85px
    const newX = Math.max(0, Math.min(e.clientX - startXRef.current, maxDrag));
    const progress = newX / maxDrag;

    setDragX(newX);
    setDragProgress(progress);

    if (handleRef.current) {
      handleRef.current.style.transform = `translateX(${newX}px)`;
    }

    // Auto-trigger full tear once dragged past 60%
    if (progress >= 0.6) {
      isDraggingRef.current = false;
      setIsDragging(false);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch (err) { }
      triggerTearAnimation(progress);
    }
  };

  const handlePointerUp = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (err) { }

    if (dragProgress >= 0.6) {
      triggerTearAnimation(dragProgress);
    } else {
      // Snap back if released before 60% threshold
      gsap.to(handleRef.current, {
        x: 0,
        duration: 0.35,
        ease: 'back.out(2)',
        onUpdate: function () {
          const current = gsap.getProperty(handleRef.current, 'x');
          setDragX(current);
          const trackWidth = trackRef.current ? trackRef.current.offsetWidth - 85 : 300;
          setDragProgress(Math.max(0, current / trackWidth));
        },
        onComplete: () => {
          setDragX(0);
          setDragProgress(0);
        }
      });
    }
  };

  // Reset function to close packaging and retry
  const handleReset = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsOpen(false);
        setIsAnimating(false);
        setDragX(0);
        setDragProgress(0);
        if (handleRef.current) {
          handleRef.current.style.transform = 'translateX(0px)';
          handleRef.current.style.opacity = '1';
        }
      }
    });

    tl.to(vipCardRef.current, {
      y: 70,
      scale: 0.85,
      opacity: 0,
      duration: 0.35
    })
      .to(pouchTopRef.current, {
        rotateX: 0,
        opacity: 1,
        visibility: 'visible',
        duration: 0.35,
        onStart: () => {
          if (pouchTopRef.current) {
            pouchTopRef.current.style.visibility = 'visible';
          }
        }
      })
      .to(stripCoverRef.current, {
        opacity: 1,
        scaleY: 1,
        duration: 0.3
      });
  };

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
      <div style={{ textAlign: 'center', marginBottom: '20px', maxWidth: '640px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '8px'
          }}
        >
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
            SPECIAL GIFT BUAT MAMAS
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-metallic-silver)', fontFamily: 'var(--font-mono)' }}>
            STATUS: {isOpen ? '● DAH GA SEGEL UY' : '○ MASIH SEGEL BOS'}
          </span>
        </div>
        <h2
          style={{
            fontSize: 'clamp(2rem, 5.5vw, 3.4rem)',
            color: '#f8f9fc',
            textShadow: '3px 3px 0px #070d1e'
          }}
        >
          {isOpen ? 'UNDANGAN BERHASIL DIBUKA' : 'TARIK SEGEL BUAT BUKANYA'}
        </h2>
      </div>

      {/* Main Packaging Pouch Container */}
      <div
        className="anim-pouch-box foil-pouch corner-crosshair"
        style={{
          width: '100%',
          maxWidth: '560px',
          margin: '0 auto 28px',
          position: 'relative',
          perspective: '1000px'
        }}
      >
        {/* Top Foil Crimp */}
        <div className="foil-crimp" />

        {/* Pouch Upper Flap */}
        <div
          ref={pouchTopRef}
          style={{
            backgroundColor: '#0c1630',
            borderBottom: '1px solid #223a6d',
            padding: '12px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--color-metallic-silver)',
            transformStyle: 'preserve-3d'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#ffe600' }}>⌖</span>
            <span style={{ fontWeight: 800, color: '#f8f9fc' }}>AYO BUKA AKU !!! </span>
          </div>
          <span style={{ backgroundColor: '#112042', padding: '1px 6px', border: '1px solid #223a6d', borderRadius: '2px' }}>
            BATCH #2811-A
          </span>
        </div>

        {/* INTERACTIVE TEAR STRIP TRACK (DRAGGABLE SLIDER) */}
        {!isOpen && (
          <div style={{ padding: '12px 14px 6px', backgroundColor: '#070d1e' }}>
            {/* Directive instruction label */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: '#ffe600',
                marginBottom: '6px',
                fontWeight: 800,
                letterSpacing: '0.05em'
              }}
            >
              <span>👉 GESER KE KANAN SAYANGGG➔</span>
              <span>PROGRES: {Math.round(dragProgress * 100)}%</span>
            </div>

            {/* The Tear Track Container */}
            <div
              ref={trackRef}
              style={{
                position: 'relative',
                height: '52px',
                backgroundColor: '#030712',
                border: '2px dashed #ffe600',
                borderRadius: '6px',
                overflow: 'hidden',
                touchAction: 'none',
                userSelect: 'none',
                boxShadow: 'inset 0 0 15px rgba(0,0,0,0.8)'
              }}
            >
              {/* Exposed Torn Interior (revealed under the torn tape) */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#0c1630',
                  boxShadow: 'inset 0 0 20px rgba(139, 92, 246, 0.4)',
                  color: '#c4b5fd',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em'
                }}
              >
                [ ★ AWW UDH DIBUKA AWWW ★ ]
              </div>

              {/* The Yellow Hazard Tear Strip (Clipped as handle moves) */}
              <div
                ref={stripCoverRef}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'repeating-linear-gradient(45deg, #ffe600, #ffe600 12px, #070d1e 12px, #070d1e 24px)',
                  clipPath: `polygon(${dragX + 40}px 0%, 100% 0%, 100% 100%, ${dragX + 40}px 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  paddingRight: '20px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.5)',
                  cursor: isDragging ? 'grabbing' : 'grab'
                }}
                onClick={() => triggerTearAnimation(0)}
              >
                <span
                  style={{
                    backgroundColor: 'rgba(7, 13, 30, 0.85)',
                    color: '#ffe600',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    fontWeight: 900,
                    padding: '2px 8px',
                    borderRadius: '2px',
                    letterSpacing: '0.08em'
                  }}
                >
                  ◀◀ BUKA AKU DONG SAYANG ◀◀
                </span>
              </div>

              {/* Draggable Pull Tab Handle */}
              <div
                ref={handleRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                style={{
                  position: 'absolute',
                  top: '2px',
                  left: '2px',
                  bottom: '2px',
                  width: '90px',
                  background: 'var(--gradient-chrome)',
                  border: '2.5px solid #070d1e',
                  borderRadius: '4px',
                  boxShadow: isDragging
                    ? '0 0 15px rgba(255, 230, 0, 0.8), 2px 2px 0px #070d1e'
                    : '4px 4px 0px #070d1e, 0 0 10px rgba(255, 255, 255, 0.5)',
                  cursor: isDragging ? 'grabbing' : 'grab',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                  userSelect: 'none',
                  zIndex: 20,
                  transform: `translateX(${dragX}px)`,
                  transition: isDragging ? 'none' : 'box-shadow 0.2s ease'
                }}
              >
                <span style={{ fontSize: '1.1rem', color: '#070d1e', lineHeight: 1 }}>⚡</span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.82rem',
                    fontWeight: 900,
                    color: '#070d1e',
                    letterSpacing: '0.05em'
                  }}
                >
                  GESER ➔
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Pouch Interior Body */}
        <div style={{ padding: '24px 20px', minHeight: '300px', position: 'relative' }}>
          {/* Sealed State Details */}
          {!isOpen && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '16px 0'
              }}
            >
              {/* Fallback Direct Click Action */}
              <button
                type="button"
                onClick={() => triggerTearAnimation(0)}
                disabled={isAnimating}
                style={{
                  background: 'var(--gradient-chrome)',
                  border: '3px solid #070d1e',
                  borderRadius: '50%',
                  width: '110px',
                  height: '110px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: isAnimating ? 'wait' : 'pointer',
                  boxShadow: '0 0 25px rgba(212, 216, 229, 0.4), 6px 6px 0px #070d1e',
                  margin: '10px 0 20px',
                  transition: 'transform 0.15s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08) rotate(4deg)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1) rotate(0deg)')}
              >
                <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>⚡</span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.82rem',
                    color: '#070d1e',
                    fontWeight: 900,
                    letterSpacing: '0.05em',
                    marginTop: '2px'
                  }}
                >
                  {isDragging ? 'SEDANG MENARIK PERHATIANMU...' : 'KLIK JG BISA'}
                </span>
              </button>

              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Sticker variant="yellow" size="sm">⚡ REAL SEGELAN</Sticker>
                <Sticker variant="chrome" size="sm">ED. 3 DETIK</Sticker>
              </div>

              <Barcode code="DHANI-VIP-BASH" spec="CONFIDENTIAL PACKAGING GRAPHIC" />
            </div>
          )}

          {/* Revealed State — Holographic VIP Pass Ticket */}
          <div
            ref={vipCardRef}
            style={{
              display: isOpen ? 'block' : 'none',
              backgroundColor: '#f8f9fc',
              color: '#070d1e',
              border: '2px solid #070d1e',
              borderRadius: '6px',
              boxShadow: '6px 6px 0px rgba(3, 7, 18, 0.9), 0 0 25px rgba(139, 92, 246, 0.3)',
              padding: '24px 20px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Holographic Top Banner */}
            <div
              className="holo-sheen"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '8px',
                borderBottom: '1px solid rgba(0,0,0,0.2)'
              }}
            />

            {/* Ticket Header Metadata */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1.5px dashed #070d1e',
                paddingBottom: '10px',
                marginBottom: '16px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem'
              }}
            >
              <span style={{ fontWeight: 800, backgroundColor: '#112042', color: '#ffe600', padding: '2px 8px', borderRadius: '2px' }}>
                VIP ACCESS PASS
              </span>
              <span style={{ fontWeight: 700, color: '#070d1e' }}>NO.20VIP11</span>
            </div>

            {/* Event Name */}
            <h3
              style={{
                fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                color: '#112042',
                lineHeight: 0.95,
                margin: '8px 0',
                letterSpacing: '-0.02em'
              }}
            >
              {eventData.eventName}
            </h3>

            {/* Invitation Badge */}
            <div
              style={{
                display: 'inline-block',
                backgroundColor: '#182b54',
                color: '#ffe600',
                border: '1.5px solid #8b5cf6',
                padding: '4px 14px',
                borderRadius: '3px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                margin: '6px 0 16px'
              }}
            >
              ★ YOU ARE SPECIALLY INVITED ★
            </div>

            <p style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.45, marginBottom: '18px' }}>
              Mamas jadi tamu spesial untuk hari special ini.
            </p>

            {/* Ticket Specs Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '8px',
                backgroundColor: 'rgba(17, 32, 66, 0.08)',
                padding: '10px 14px',
                borderRadius: '4px',
                border: '1px solid #cbd5e1',
                textAlign: 'left',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                marginBottom: '20px'
              }}
            >
              <div>
                <div style={{ fontWeight: 800, color: '#112042' }}>TANGGAL</div>
                <div style={{ color: '#070d1e' }}>28 November 2026</div>
              </div>
              <div>
                <div style={{ fontWeight: 800, color: '#112042' }}>WAKTU</div>
                <div style={{ color: '#070d1e' }}>Lunch Time</div>
              </div>
            </div>
            {/* RSVP Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                type="button"
                onClick={() => onNext()}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  width: '100%',
                  padding: '15px 20px',
                  backgroundColor: '#112042',
                  color: '#ffe600',
                  border: '2.5px solid #8b5cf6',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 900,
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  boxShadow: '4px 4px 0px #070d1e',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(-2px, -2px)';
                  e.currentTarget.style.boxShadow = '6px 6px 0px #070d1e';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(0, 0)';
                  e.currentTarget.style.boxShadow = '4px 4px 0px #070d1e';
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>LANJUT ?</span>
              </button>
            </div>

          </div>
        </div>

        {/* Bottom Foil Crimp */}
        <div className="foil-crimp" />
      </div>
    </section>
  );
}
