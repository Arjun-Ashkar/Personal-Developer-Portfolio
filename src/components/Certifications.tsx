import { Award } from 'lucide-react';
import { useInView } from '../hooks';
import { certifications } from '../data';

export default function Certifications() {
  const { ref, visible } = useInView();

  return (
    <section
      id="certifications"
      ref={ref as React.RefObject<HTMLElement>}
      className={`reveal ${visible ? 'visible' : ''} ambient-section-glow`}
      style={{ padding: '5.5rem 1.5rem' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <span className="section-label">Credentials</span>
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 2.85rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              margin: 0,
            }}
          >
            Certifications
          </h2>
        </div>

        {/* Certification Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {certifications.map((cert, idx) => (
            <article
              key={cert.title}
              className={`card stagger-${Math.min(idx + 1, 4)}`}
              style={{
                padding: '1.85rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
              }}
              aria-label={cert.title}
            >
              {/* Icon badge */}
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '12px',
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                }}
              >
                <Award size={18} aria-hidden="true" />
              </div>

              {/* Provider + date */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--text-tertiary)',
                  }}
                >
                  {cert.provider}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', flexShrink: 0, fontWeight: 500 }}>
                  {cert.date}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  margin: 0,
                  lineHeight: 1.45,
                  letterSpacing: '-0.01em',
                }}
              >
                {cert.title}
              </h3>

              {/* Description */}
              {cert.description && (
                <p style={{ fontSize: '0.85rem', lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>
                  {cert.description}
                </p>
              )}

              {/* Credential ID */}
              {cert.credentialId && (
                <p
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--text-tertiary)',
                    margin: 'auto 0 0 0',
                    paddingTop: '0.5rem',
                    fontFamily: 'monospace',
                  }}
                >
                  ID: {cert.credentialId}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
