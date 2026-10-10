import { BookOpen } from 'lucide-react';
import { useInView } from '../hooks';
import { publications } from '../data';

export default function Research() {
  const { ref, visible } = useInView();

  return (
    <section
      id="research"
      ref={ref as React.RefObject<HTMLElement>}
      className={`reveal ${visible ? 'visible' : ''}`}
      style={{
        padding: '5.5rem 1.5rem',
        background: 'var(--bg-secondary)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <span className="section-label">Publications</span>
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 2.85rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              margin: 0,
            }}
          >
            Research & publications
          </h2>
        </div>

        {/* Publication Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {publications.map((pub, i) => (
            <article
              key={i}
              className={`card stagger-${Math.min(i + 1, 4)}`}
              style={{ padding: '2.2rem', display: 'flex', gap: '1.5rem' }}
              aria-label={pub.title}
            >
              {/* Icon badge */}
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  flexShrink: 0,
                  marginTop: '2px',
                }}
              >
                <BookOpen size={20} aria-hidden="true" />
              </div>

              {/* Content body */}
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Journal + date */}
                <div
                  style={{
                    display: 'flex',
                    gap: '0.85rem',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    marginBottom: '0.65rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text-tertiary)',
                    }}
                  >
                    {pub.journal}
                  </span>
                  {pub.date && (
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>
                      {pub.date}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    margin: '0 0 0.85rem',
                    lineHeight: 1.4,
                    letterSpacing: '-0.015em',
                  }}
                >
                  {pub.title}
                </h3>

                {/* Abstract */}
                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.75,
                    color: 'var(--text-secondary)',
                    margin: '0 0 1.25rem',
                  }}
                >
                  {pub.abstract}
                </p>

                {/* Metric highlights */}
                {pub.metrics && pub.metrics.length > 0 && (
                  <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                    {pub.metrics.map(m => (
                      <div
                        key={m.label}
                        style={{
                          padding: '0.75rem 1.25rem',
                          borderRadius: '12px',
                          background: 'var(--bg-glass)',
                          border: '1px solid var(--border-subtle)',
                        }}
                      >
                        <p
                          style={{
                            fontSize: '1.25rem',
                            fontWeight: 800,
                            color: 'var(--text-primary)',
                            margin: '0 0 0.15rem',
                            letterSpacing: '-0.02em',
                          }}
                        >
                          {m.value}
                        </p>
                        <p style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', margin: 0, fontWeight: 500 }}>
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
