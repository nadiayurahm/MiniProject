import React from 'react';

/**
 * Bright High-Contrast Packaging Spec Label Sticker
 */
export default function ProductLabel({
  itemNo = "LUVU#2011",
  product = "BIRTHDAY LUNCH",
  edition = "NANAED.2026",
  status = "READY TO UNBOX",
  className = "",
  style = {}
}) {
  return (
    <div
      className={`select-none relative ${className}`}
      style={{
        backgroundColor: '#ffffff',
        color: '#070d1e',
        border: '2px solid #070d1e',
        padding: '12px 14px',
        boxShadow: '4px 4px 0px rgba(3, 7, 18, 0.7)',
        borderRadius: '4px',
        maxWidth: '280px',
        fontFamily: 'var(--font-mono)',
        ...style
      }}
    >
      {/* Corner crosshairs */}
      <span style={{ position: 'absolute', top: '2px', left: '4px', color: '#8b5cf6', fontSize: '10px', fontWeight: 900 }}>+</span>
      <span style={{ position: 'absolute', bottom: '2px', right: '4px', color: '#8b5cf6', fontSize: '10px', fontWeight: 900 }}>+</span>

      {/* Top row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1.5px solid #070d1e',
          paddingBottom: '5px',
          marginBottom: '6px',
          gap: '8px'
        }}
      >
        <span
          style={{
            fontWeight: 900,
            color: '#070d1e',
            backgroundColor: '#ffe600',
            border: '1px solid #070d1e',
            padding: '2px 6px',
            borderRadius: '2px',
            letterSpacing: '0.06em',
            fontSize: '0.78rem'
          }}
        >
          {itemNo}
        </span>
        <span
          style={{
            backgroundColor: '#8b5cf6',
            color: '#ffffff',
            padding: '2px 8px',
            borderRadius: '2px',
            fontSize: '0.62rem',
            fontWeight: 800,
            letterSpacing: '0.05em'
          }}
        >
          {status}
        </span>
      </div>

      {/* Specs list */}
      <div style={{ fontSize: '0.72rem', lineHeight: '1.45', color: '#1e293b' }}>
        <div>ITEM: <strong style={{ color: '#070d1e' }}>{product}</strong></div>
        <div>SPEC: <span style={{ color: '#334155', fontWeight: 700 }}>{edition}</span></div>
        <div>AUTH: <strong style={{ color: '#8b5cf6' }}>VIP-CONFIDENTIAL</strong></div>
      </div>
    </div>
  );
}
