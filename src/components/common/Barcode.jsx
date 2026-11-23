import React from 'react';

/**
 * Bright High-Contrast Packaging Barcode Sticker
 */
export default function Barcode({
  code = "2811-DHANI-BDAY",
  spec = "SPECIAL EVENT 2026",
  className = "",
  style = {}
}) {
  const bars = [
    2, 1, 3, 1, 1, 4, 1, 2, 3, 1, 2, 1, 4, 1, 1, 3, 2, 1, 3, 1, 4, 1, 2, 1, 3, 2, 1, 4, 1, 2, 1, 3, 1, 2, 4, 1, 1, 3, 2
  ];

  return (
    <div
      className={`inline-flex flex-col items-center select-none ${className}`}
      style={{
        backgroundColor: '#ffffff',
        color: '#070d1e',
        padding: '10px 14px',
        border: '2px solid #070d1e',
        borderRadius: '4px',
        boxShadow: '4px 4px 0px rgba(3, 7, 18, 0.7)',
        ...style
      }}
    >
      <div style={{ display: 'flex', gap: '1.5px', alignItems: 'flex-end', height: '34px', width: '100%', justifyContent: 'center' }}>
        {bars.map((w, idx) => {
          const isTall = idx === 0 || idx === 1 || idx === Math.floor(bars.length / 2) || idx === bars.length - 1 || idx === bars.length - 2;
          return (
            <div
              key={idx}
              style={{
                width: `${w * 1.3}px`,
                height: isTall ? '34px' : '28px',
                backgroundColor: '#070d1e'
              }}
            />
          );
        })}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          fontWeight: 900,
          letterSpacing: '0.15em',
          marginTop: '4px',
          textTransform: 'uppercase',
          color: '#070d1e'
        }}
      >
        {code}
      </div>
      {spec && (
        <div
          style={{
            fontSize: '0.56rem',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.1em',
            color: '#475569',
            fontWeight: 800,
            textTransform: 'uppercase'
          }}
        >
          {spec}
        </div>
      )}
    </div>
  );
}
