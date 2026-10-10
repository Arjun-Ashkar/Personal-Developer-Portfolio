import { GraduationCap } from 'lucide-react';
import { useInView } from '../hooks';
import { education } from '../data';

export default function Education() {
  const { ref, visible } = useInView();

  return (
    <section
      id="education"
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
          <span className="section-label">Background</span>
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 2.85rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              margin: 0,
            }}
          >
            Education
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ maxWidth: '760px' }}>
          {education.map((entry, i) => (
            <div
              key={i}
              className={`stagger-${Math.min(i + 1, 4)}`}
              style={{
                display: 'flex',
                gap: '1.5rem',
              }}
            >
              {/* Left: glowing dot + line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div
                  className={`timeline-dot ${i === 0 ? 'active' : ''}`}
                />
                {i < education.length - 1 && (
                  <div className="timeline-line" style={{ margin: '0.5rem 0' }} />
                )}
              </div>

              {/* Right: glass card container */}
              <div
                className="card"
                style={{
                  padding: '1.5rem 1.75rem',
                  marginBottom: i < education.length - 1 ? '1.5rem' : 0,
                  flex: 1,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        margin: '0 0 0.25rem',
                        letterSpacing: '-0.015em',
                      }}
                    >
                      {entry.degree}
                    </h3>
                    {entry.field && (
                      <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: '0 0 0.25rem', fontWeight: 500 }}>
                        {entry.field}
                      </p>
                    )}
                    <p
                      style={{
                        fontSize: '0.82rem',
                        color: 'var(--text-tertiary)',
                        margin: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                      }}
                    >
                      <GraduationCap size={14} aria-hidden="true" />
                      <span>{entry.institution}</span>
                    </p>
                  </div>

                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', margin: '0 0 0.35rem', fontWeight: 500 }}>
                      {entry.year}
                    </p>
                    {entry.score && entry.scoreLabel && (
                      <span
                        style={{
                          display: 'inline-flex',
                          padding: '0.22rem 0.7rem',
                          borderRadius: '9999px',
                          background: 'var(--bg-glass)',
                          border: '1px solid var(--border)',
                          fontSize: '0.74rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                        }}
                      >
                        {entry.scoreLabel}: {entry.score}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
