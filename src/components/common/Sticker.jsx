import React from 'react';

/**
 * Tactical Die-Cut Vinyl Sticker component
 * Authentic streetwear aesthetic with physical white die-cut border & shadow
 */
export default function Sticker({
  children,
  text,
  variant = 'yellow', // 'yellow', 'chrome', 'navy', 'purple', 'white'
  rotate = -3,
  size = 'md', // 'sm', 'md', 'lg'
  className = '',
  style = {},
  isFloating = false,
  ...props
}) {
  const variantStyles = {
    yellow: {
      backgroundColor: '#ffe600',
      color: '#070d1e',
      border: '2.5px solid #ffffff',
      boxShadow: '4px 4px 0px rgba(3, 7, 18, 0.7)',
      fontWeight: '900'
    },
    chrome: {
      background: 'var(--gradient-chrome)',
      color: '#070d1e',
      border: '2px solid #ffffff',
      boxShadow: '4px 4px 0px rgba(3, 7, 18, 0.7)',
      fontWeight: '900'
    },
    navy: {
      backgroundColor: '#112042',
      color: '#f8f9fc',
      border: '2px solid #8b5cf6',
      boxShadow: '4px 4px 0px rgba(3, 7, 18, 0.8)'
    },
    purple: {
      backgroundColor: '#8b5cf6',
      color: '#f8f9fc',
      border: '2px solid #ffffff',
      boxShadow: '4px 4px 0px rgba(3, 7, 18, 0.7)',
      fontWeight: '800'
    },
    white: {
      backgroundColor: '#f8f9fc',
      color: '#070d1e',
      border: '2px solid #070d1e',
      boxShadow: '4px 4px 0px rgba(3, 7, 18, 0.6)',
      fontWeight: '800'
    }
  };

  const sizeStyles = {
    sm: { padding: '4px 10px', fontSize: '0.72rem' },
    md: { padding: '6px 14px', fontSize: '0.88rem' },
    lg: { padding: '8px 20px', fontSize: '1.1rem' }
  };

  const currentVariant = variantStyles[variant] || variantStyles.yellow;
  const currentSize = sizeStyles[size] || sizeStyles.md;

  return (
    <div
      className={`select-none uppercase font-extrabold ${isFloating ? 'floating-elem' : ''} ${className}`}
      style={{
        ...currentVariant,
        ...currentSize,
        borderRadius: '4px',
        transform: `rotate(${rotate}deg)`,
        '--rot': `${rotate}deg`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        letterSpacing: '0.06em',
        fontFamily: 'var(--font-display)',
        whiteSpace: 'nowrap',
        cursor: 'default',
        transition: 'transform 0.15s ease',
        ...style
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `rotate(${rotate}deg) scale(1.05)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotate(${rotate}deg) scale(1)`;
      }}
      {...props}
    >
      {text || children}
    </div>
  );
}
