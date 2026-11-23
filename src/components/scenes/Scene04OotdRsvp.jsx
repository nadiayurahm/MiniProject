import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Sticker from '../common/Sticker';
import StarBurst from '../common/StarBurst';

export default function Scene04OotdRsvp({ onPrev, eventData }) {
  const containerRef = useRef(null);
  const [guestName, setGuestName] = useState('');
  const [attendance, setAttendance] = useState('yes'); // 'yes' or 'maybe'
  const [showMaybePopup, setShowMaybePopup] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        gsap.set('.anim-s4', { opacity: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.anim-s4-header',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
        .fromTo(
          '.anim-s4-card',
          { opacity: 0, scale: 0.96, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.1)' },
          '-=0.2'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsappRsvp = () => {
    if (attendance === 'maybe') {
      setShowMaybePopup(true);
      return;
    }
    const nameStr = guestName.trim() ? `${guestName.trim()}` : '';
    const statusStr = attendance === 'yes' ? 'pasti hadir' : 'akan konfirmasi ulang';
    const message = `Sayanggg! Aku ${nameStr} sayangnya kamu. Aku bisa datang Cantikku! 💜`;
    const url = `https://wa.me/62895331826252?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const outfitInspirations = [
    {
      code: "TOP",
      tag: "NAVY",
      desc: "Baju mamas yang warna navy.",
      colorTag: "#12224a"
    },
    {
      code: "BOTTOM",
      tag: "COMFY",
      desc: "Celana bebas yang paling nyaman dipake mamas.",
      colorTag: "#8b5cf6"
    },
    {
      code: "BAG",
      tag: "BLACK",
      desc: "Tas hitam mamas yang kicit, dari H&M bukan ya?.",
      colorTag: "#070d1e"
    }
  ];

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
      {/* Header */}
      <div className="anim-s4-header" style={{ textAlign: 'center', marginBottom: '24px', maxWidth: '680px' }}>
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
            OOTD & MUST ITEM
          </span>
        </div>
        <h2
          style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
            color: '#f8f9fc',
            textShadow: '3px 3px 0px #070d1e'
          }}
        >
          OOTD GUIDE & YOUR CONFIRMATION
        </h2>
      </div>

      {/* Main Two-Column Tactical Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'center',
          gap: '20px',
          width: '100%',
          maxWidth: '1040px',
          marginBottom: '28px'
        }}
      >
        {/* Left Column: Streetwear Lookbook Card */}
        <div
          className="anim-s4-card foil-pouch corner-crosshair"
          style={{ padding: '0 0 20px', position: 'relative' }}
        >
          <div className="foil-crimp" />

          {/* Card Top Technical Bar */}
          <div
            style={{
              backgroundColor: '#070d1e',
              borderBottom: '1px solid #223a6d',
              padding: '8px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--color-metallic-silver)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: '#ffe600' }}>⌖</span>
              <span style={{ fontWeight: 800 }}>DRESS CODE</span>
            </div>
            <span>WAJIB DIPAKAI</span>
          </div>

          <div style={{ padding: '22px 20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '12px' }}>
              <div>
                <h3 style={{ fontSize: '1.7rem', color: '#ffe600', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
                  Your Favorite Color 💙
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-metallic-silver)', lineHeight: 1.45, marginTop: '6px' }}>
                  Aku suka kalo mamas pake baju ini, jadi jangan lupa pake ya ganteng ku
                </p>
              </div>
            </div>
            {/* Lookbook Specs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#ffe600' }}>
                CURATED LOOKS:
              </div>
              {outfitInspirations.map((item, idx) => (
                <div
                  key={idx}
                  className="card-street-light"
                  style={{
                    padding: '12px 14px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}
                >
                  <div
                    style={{
                      backgroundColor: '#112042',
                      color: '#ffe600',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      padding: '4px 6px',
                      borderRadius: '2px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {item.code}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: '#112042' }}>
                        {item.title}
                      </span>
                      <span
                        style={{
                          fontSize: '0.62rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 800,
                          backgroundColor: item.colorTag,
                          color: item.colorTag === '#d4d8e5' ? '#070d1e' : '#fff',
                          padding: '1px 6px',
                          borderRadius: '2px'
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.78rem', color: '#334155', marginTop: '2px', lineHeight: 1.35 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Tactical RSVP Dispatch Card */}
        <div
          className="anim-s4-card foil-pouch corner-crosshair"
          style={{ padding: '0 0 20px', position: 'relative', display: 'flex', flexDirection: 'column' }}
        >
          <div className="foil-crimp" />

          {/* Card Top Technical Bar */}
          <div
            style={{
              backgroundColor: '#070d1e',
              borderBottom: '1px solid #223a6d',
              padding: '8px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--color-metallic-silver)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: '#ffe600' }}>●</span>
              <span style={{ fontWeight: 800 }}>RSVP CONFIRMATION</span>
            </div>
          </div>

          <div style={{ padding: '22px 20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.7rem', color: '#ffe600', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
                KONFIRMASI DISINI
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-metallic-silver)', lineHeight: 1.45, marginBottom: '18px' }}>
                Tolong beritahu aku mamas bisa datang atau nda !
              </p>

              {/* Guest Name Input */}
              <div style={{ marginBottom: '16px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 800,
                    color: '#ffe600',
                    marginBottom: '6px',
                    letterSpacing: '0.08em'
                  }}
                >
                  Nama kamu ?
                </label>
                <input
                  type="text"
                  placeholder="Ketik nama kamu di sini..."
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '4px',
                    border: '1.5px solid var(--color-metallic-silver)',
                    backgroundColor: '#f8f9fc',
                    color: '#070d1e',
                    fontSize: '0.95rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    outline: 'none',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
                  }}
                />
              </div>

              {/* Attendance Choice Buttons */}
              <div style={{ marginBottom: '22px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 800,
                    color: '#ffe600',
                    marginBottom: '6px',
                    letterSpacing: '0.08em'
                  }}
                >
                  STATUS KEHADIRAN :
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <button
                    type="button"
                    onClick={() => setAttendance('yes')}
                    style={{
                      padding: '10px 8px',
                      borderRadius: '3px',
                      border: attendance === 'yes' ? '2px solid #ffe600' : '1px solid #223a6d',
                      backgroundColor: attendance === 'yes' ? '#182b54' : '#070d1e',
                      color: attendance === 'yes' ? '#ffe600' : 'var(--color-metallic-silver)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      boxShadow: attendance === 'yes' ? '0 0 12px rgba(139, 92, 246, 0.35)' : 'none'
                    }}
                  >
                    ✓ PASTI HADIR
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setAttendance('yes');
                      setShowMaybePopup(true);
                    }}
                    style={{
                      padding: '10px 8px',
                      borderRadius: '3px',
                      border: attendance === 'maybe' ? '2px solid #ffe600' : '1px solid #223a6d',
                      backgroundColor: attendance === 'maybe' ? '#182b54' : '#070d1e',
                      color: attendance === 'maybe' ? '#ffe600' : 'var(--color-metallic-silver)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    ? BELUM PASTI
                  </button>
                </div>
              </div>

              {/* Big Action Button */}
              <button
                type="button"
                onClick={handleWhatsappRsvp}
                className="btn-street btn-street-chrome"
                style={{
                  width: '100%',
                  fontSize: '1.2rem',
                  padding: '15px 20px',
                  borderRadius: '4px',
                  marginBottom: '18px'
                }}
              >
                <span>KIRIM➔</span>
              </button>
            </div>

            {/* Romantic Princess Closing Note */}
            <div
              style={{
                backgroundColor: '#070d1e',
                border: '1.5px dashed var(--color-accent-purple)',
                borderRadius: '4px',
                padding: '14px',
                textAlign: 'center'
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  color: '#ffe600',
                  letterSpacing: '0.04em',
                  marginBottom: '4px'
                }}
              >
                "{eventData.closingMessage}"
              </p>

            </div>
          </div>
        </div>
      </div>
      {/* Popup Modal Ketika Klik BELUM PASTI */}
      {showMaybePopup && (
        <div
          onClick={() => setShowMaybePopup(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(7, 13, 30, 0.78)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            zIndex: 999
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="foil-pouch corner-crosshair"
            style={{
              maxWidth: '400px',
              width: '100%',
              padding: '0 0 20px',
              position: 'relative',
              textAlign: 'center'
            }}
          >
            <div className="foil-crimp" />

            <div
              style={{
                backgroundColor: '#070d1e',
                borderBottom: '1px solid #223a6d',
                padding: '8px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--color-metallic-silver)'
              }}
            >
              <span style={{ color: '#ffe600', fontWeight: 800 }}>⚠ ALERT</span>
              <span style={{ color: '#c4b5fd' }}>ACCESS DENIED</span>
            </div>

            <div style={{ padding: '24px 20px 8px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  color: '#ffe600',
                  lineHeight: 1.3,
                  marginBottom: '20px'
                }}
              >
                eits kamu gabisa ga hadir, wlekkkk
              </p>

              <button
                type="button"
                onClick={() => setShowMaybePopup(false)}
                className="btn-street btn-street-primary"
                style={{
                  width: '100%',
                  fontSize: '1rem',
                  padding: '11px 18px',
                  borderRadius: '4px'
                }}
              >
                OKE, AKU PASTI HADIR!
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
