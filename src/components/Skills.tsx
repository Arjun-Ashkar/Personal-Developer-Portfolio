import { useInView } from '../hooks';
import { skills } from '../data';

export default function Skills() {
  const { ref, visible } = useInView();

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className={`reveal ${visible ? 'visible' : ''}`}
      style={{
        padding: '5.5rem 1.5rem',
        background: 'var(--bg-secondary)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <span className="section-label">Capabilities</span>
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 2.85rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              margin: 0,
            }}
          >
            Technical skills
          </h2>
        </div>

        {/* Skill Groups Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {skills.map((group, idx) => (
            <div
              key={group.group}
              className={`card stagger-${Math.min(idx + 1, 4)}`}
              style={{
                padding: '1.85rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-tertiary)',
                  margin: '0 0 1.25rem',
                }}
              >
                {group.group}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem', marginTop: 'auto' }}>
                {group.items.map(item => (
                  <span key={item} className="skill-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
