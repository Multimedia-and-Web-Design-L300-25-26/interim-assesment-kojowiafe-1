import { useState } from 'react';

/**
 * WarningBanner – displayed at the top of every page (except auth pages)
 * to clarify this is a student project and not affiliated with Coinbase.
 */
function WarningBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      role="alert"
      style={{
        background: 'linear-gradient(90deg, #78350f 0%, #92400e 50%, #78350f 100%)',
        borderBottom: '1px solid #b45309',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        position: 'relative',
        zIndex: 1000,
        flexWrap: 'wrap',
      }}
    >
      {/* Warning icon */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        style={{ flexShrink: 0 }}
        aria-hidden="true"
      >
        <path
          d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
          fill="#FCD34D"
          stroke="#F59E0B"
          strokeWidth="1"
        />
        <line x1="12" y1="9" x2="12" y2="13" stroke="#1C1917" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="17" r="1" fill="#1C1917" />
      </svg>

      {/* Message */}
      <p
        style={{
          color: '#FEF3C7',
          fontSize: '0.875rem',
          fontWeight: '600',
          margin: 0,
          textAlign: 'center',
          lineHeight: '1.5',
        }}
      >
        ⚠️ &nbsp;
        <strong style={{ color: '#FCD34D' }}>Student Project</strong>
        &nbsp;— This is an academic demo app built for learning purposes. It is{' '}
        <strong style={{ color: '#FCD34D' }}>NOT affiliated with or endorsed by Coinbase</strong>.
        Do not use real personal or financial information.
      </p>

      {/* Dismiss button */}
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss warning"
        style={{
          position: 'absolute',
          right: '14px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: '#FCD34D',
          fontSize: '1.1rem',
          lineHeight: 1,
          padding: '4px 6px',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.15s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(251,191,36,0.15)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
      >
        ✕
      </button>
    </div>
  );
}

export default WarningBanner;
