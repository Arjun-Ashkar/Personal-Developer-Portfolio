import { useInView } from '../hooks';

export default function About() {
  const { ref, visible } = useInView();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className={`reveal ${visible ? 'visible' : ''} ambient-section-glow`}
      style={{ padding: '5.5rem 1.5rem' }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3.5rem',
          alignItems: 'start',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Left col — label + heading */}
        <div>
          <span className="section-label">About</span>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.2vw, 3.2rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              margin: 0,
            }}
          >
            A little
            <br />
            about me
          </h2>
        </div>

        {/* Right col — content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-secondary)', margin: 0 }}>
            I'm a final-year Computer Science and Engineering student at SRM Institute of Science
            and Technology, Vadapalani, Chennai, currently maintaining a CGPA of 9.58.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-secondary)', margin: 0 }}>
            My focus is on practical software engineering — building web applications that solve
            real problems. I enjoy working across the full stack, with particular interest in
            React-based front-ends and Python-powered back-end services.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-secondary)', margin: 0 }}>
            I've applied machine learning in academic and project contexts, including forest-fire
            severity prediction and career intelligence modelling. Both projects shaped my
            understanding of how data quality, class imbalance, and model interpretability
            affect real-world outcomes.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-secondary)', margin: 0 }}>
            Outside of building things, I'm continuously strengthening my foundations in
            algorithms, data structures, and system design — because I believe strong fundamentals
            are what make developers effective over the long term.
          </p>

          {/* Stat highlights with Apple glass container */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '1rem',
              marginTop: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            {[
              { value: '9.58', label: 'CGPA' },
              { value: '3+', label: 'Projects built' },
              { value: '2', label: 'Publications' },
              { value: '4', label: 'Certifications' },
            ].map((s, idx) => (
              <div
                key={s.label}
                className={`card stagger-${idx + 1}`}
                style={{
                  padding: '1.25rem 1rem',
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    fontSize: '1.85rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    margin: '0 0 0.25rem',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-tertiary)',
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
