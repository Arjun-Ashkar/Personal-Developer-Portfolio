import { ArrowUp } from 'lucide-react';
import { personal } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        padding: '3rem 1.5rem',
        background: 'var(--bg-primary)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
      >
        {/* Left */}
        <div>
          <p
            style={{
              margin: '0 0 0.25rem',
              fontWeight: 700,
              fontSize: '0.96rem',
              color: 'var(--text-primary)',
              letterSpacing: '-0.015em',
            }}
          >
            {personal.name}
          </p>
          <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>
            CS Engineering Student · SRM IST Vadapalani
          </p>
        </div>

        {/* Right: Copyright and Back to Top */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
            © {year} {personal.name}. All rights reserved.
          </p>
          <a
            href="#top"
            aria-label="Back to top"
            className="btn-ghost"
            style={{
              padding: '0.4rem 0.85rem',
              fontSize: '0.78rem',
              borderRadius: '9999px',
            }}
          >
            <span>Top</span>
            <ArrowUp size={12} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
