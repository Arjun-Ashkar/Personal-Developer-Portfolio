import { ArrowDown, ArrowRight } from 'lucide-react';
import { personal } from '../data';

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 1.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Subtle geometric grid background */}
      <div className="hero-grid-bg" aria-hidden="true" />

      {/* Ambient radial glow behind hero typography */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.04), transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />

      {/* Decorative concentric circles with subtle ambient opacity */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-8%',
          top: '18%',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          border: '1px solid var(--border-subtle)',
          opacity: 0.35,
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-3%',
          top: '24%',
          width: '360px',
          height: '360px',
          borderRadius: '50%',
          border: '1px solid var(--border-subtle)',
          opacity: 0.22,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          paddingTop: '6.5rem',
          paddingBottom: '4.5rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Monogram badge with subtle glass treatment */}
        <div
          className="hero-animate-1"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.65rem',
            padding: '0.4rem 1rem',
            border: '1px solid var(--border)',
            background: 'var(--bg-glass)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '9999px',
            marginBottom: '2.5rem',
          }}
        >
          <span
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              background: 'var(--accent-dim)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.65rem',
              fontWeight: 800,
              color: 'var(--text-primary)',
              letterSpacing: '0.02em',
            }}
            aria-hidden="true"
          >
            {personal.monogram}
          </span>
          <span
            style={{
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              fontWeight: 500,
              letterSpacing: '0.02em',
            }}
          >
            Portfolio · {new Date().getFullYear()}
          </span>
        </div>

        {/* Headline */}
        <h1
          className="hero-animate-2"
          style={{
            fontSize: 'clamp(2.6rem, 6.5vw, 5.6rem)',
            fontWeight: 800,
            lineHeight: 1.06,
            letterSpacing: '-0.035em',
            color: 'var(--text-primary)',
            maxWidth: '860px',
            margin: '0 0 1.5rem 0',
          }}
        >
          Building thoughtful digital experiences with code.
        </h1>

        {/* Name + role */}
        <div className="hero-animate-3" style={{ marginBottom: '1.75rem' }}>
          <p
            style={{
              fontSize: 'clamp(1.15rem, 2.4vw, 1.45rem)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              margin: '0 0 0.35rem 0',
              letterSpacing: '-0.015em',
            }}
          >
            {personal.name}
          </p>
          <p
            style={{
              fontSize: '0.96rem',
              color: 'var(--text-tertiary)',
              margin: 0,
              fontWeight: 500,
            }}
          >
            {personal.role}
          </p>
        </div>

        {/* Intro description */}
        <p
          className="hero-animate-4"
          style={{
            fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.75,
            maxWidth: '580px',
            margin: '0 0 2.5rem 0',
          }}
        >
          {personal.intro}
        </p>

        {/* Action CTAs */}
        <div
          className="hero-animate-5"
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <a href="#projects" className="btn-primary">
            <span>Explore My Projects</span>
            <ArrowRight size={15} aria-hidden="true" />
          </a>
          <a href="#contact" className="btn-ghost">
            <span>Get in Touch</span>
          </a>
          {personal.github && (
            <a
              href={personal.github}
              className="btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.85rem' }}
            >
              GitHub ↗
            </a>
          )}
        </div>

        {/* Scroll hint */}
        <div
          className="hero-animate-6"
          style={{
            marginTop: '3.75rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--text-tertiary)',
            fontSize: '0.74rem',
            letterSpacing: '0.08em',
            fontWeight: 500,
          }}
          aria-hidden="true"
        >
          <ArrowDown size={13} />
          <span>SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  );
}
