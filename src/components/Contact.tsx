import { Mail, ExternalLink, GitBranch, ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks';
import { personal } from '../data';

export default function Contact() {
  const { ref, visible } = useInView();

  const links = [
    {
      icon: <Mail size={20} aria-hidden="true" />,
      label: 'Email',
      display: personal.email || 'Add email in data.ts',
      href: personal.email ? `mailto:${personal.email}` : null,
    },
    {
      icon: <ExternalLink size={20} aria-hidden="true" />,
      label: 'LinkedIn',
      display: personal.linkedin
        ? personal.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, '').replace(/\/$/, '')
        : 'Add LinkedIn URL in data.ts',
      href: personal.linkedin || null,
    },
    {
      icon: <GitBranch size={20} aria-hidden="true" />,
      label: 'GitHub',
      display: personal.github
        ? personal.github.replace(/^https?:\/\/(www\.)?github\.com\//, '').replace(/\/$/, '')
        : 'Add GitHub URL in data.ts',
      href: personal.github || null,
    },
  ];

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className={`reveal ${visible ? 'visible' : ''} ambient-section-glow`}
      style={{ padding: '5.5rem 1.5rem' }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left info column */}
          <div>
            <span className="section-label">Contact</span>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4.2vw, 3.2rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                margin: '0 0 1.25rem',
              }}
            >
              Let's connect
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                maxWidth: '420px',
                margin: 0,
              }}
            >
              I'm always interested in learning, building practical software projects, and
              connecting with people in technology. Feel free to reach out via email or LinkedIn.
            </p>
          </div>

          {/* Right contact cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {links.map((link, idx) => (
              <div key={link.label} className={`stagger-${idx + 1}`}>
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="card"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1.25rem 1.5rem',
                      textDecoration: 'none',
                      color: 'var(--text-primary)',
                    }}
                    aria-label={`${link.label}: ${link.display}`}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '12px',
                          background: 'var(--bg-glass)',
                          border: '1px solid var(--border)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--text-primary)',
                          flexShrink: 0,
                        }}
                      >
                        {link.icon}
                      </div>
                      <div>
                        <p
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: 'var(--text-tertiary)',
                            margin: '0 0 0.15rem',
                          }}
                        >
                          {link.label}
                        </p>
                        <p
                          style={{
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                            margin: 0,
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {link.display}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={18}
                      style={{
                        color: 'var(--text-tertiary)',
                        transition: 'transform 0.25s ease, color 0.25s ease',
                      }}
                      className="project-arrow-icon"
                      aria-hidden="true"
                    />
                  </a>
                ) : (
                  <div
                    className="card"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1.25rem 1.5rem',
                      opacity: 0.65,
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '12px',
                        background: 'var(--bg-glass)',
                        border: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-tertiary)',
                      }}
                    >
                      {link.icon}
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: 'var(--text-tertiary)',
                          margin: '0 0 0.15rem',
                        }}
                      >
                        {link.label}
                      </p>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-tertiary)', margin: 0 }}>
                        {link.display}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
