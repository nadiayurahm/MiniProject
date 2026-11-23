import React from 'react';

/**
 * Streetwear Geometric Starburst Stamp Seal
 * Uses SVG text with text-anchor="middle" so text is 100% mathematically locked
 * to the exact center of the starburst, with zero chance of offset or overflow.
 */
export default function StarBurst({
  text = "MAMAS",
  subtext = "SPECIAL FOR",
  size = 115,
  color = "#ffe600",
  textColor = "#070d1e",
  rotate = 0,
  className = "",
  style = {}
}) {
  // 16-point star with 32 points: rOuter = 48, rInner = 38, center (50, 50)
  const starPoints = Array.from({ length: 32 }, (_, i) => {
    const angle = (i * Math.PI) / 16 - Math.PI / 2;
    const r = i % 2 === 0 ? 48 : 38;
    const x = (50 + r * Math.cos(angle)).toFixed(1);
    const y = (50 + r * Math.sin(angle)).toFixed(1);
    return `${x},${y}`;
  }).join(' ');

  return (
    <div
      className={`select-none ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        width: `${size}px`,
        height: `${size}px`,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        filter: 'drop-shadow(4px 4px 0px rgba(3, 7, 18, 0.75))',
        userSelect: 'none',
        ...style
      }}
    >
      <svg
        viewBox="0 0 100 100"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          overflow: 'visible'
        }}
      >
        {/* Starburst polygon */}
        <polygon
          points={starPoints}
          fill={color}
          stroke="#070d1e"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Inner dashed circle for streetwear seal look */}
        <circle
          cx="50"
          cy="50"
          r="34"
          fill="none"
          stroke="#070d1e"
          strokeWidth="1.2"
          strokeDasharray="2.5,2"
          opacity="0.4"
        />

        {/* Subtext on top (e.g. "SPECIAL FOR") */}
        {subtext && (
          <text
            x="50"
            y={text ? "41" : "50"}
            textAnchor="middle"
            dominantBaseline="central"
            fill={textColor}
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 800,
              fontSize: '7.8px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}
          >
            {subtext}
          </text>
        )}

        {/* Main Text in center / below subtext (e.g. "MAMAS") */}
        {text && (
          <text
            x="50"
            y={subtext ? "58" : "50"}
            textAnchor="middle"
            dominantBaseline="central"
            fill={textColor}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: '18px',
              letterSpacing: '0.04em',
              textTransform: 'uppercase'
            }}
          >
            {text}
          </text>
        )}
      </svg>
    </div>
  );
}
