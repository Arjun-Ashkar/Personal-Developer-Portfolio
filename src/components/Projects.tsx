import { ExternalLink, ArrowUpRight, Clock } from 'lucide-react';
import { useInView } from '../hooks';
import { projects } from '../data';
import type { Project } from '../data';

// Abstract visual panel per project (SVG-based, lightweight, Apple-inspired)
function ProjectVisual({ id }: { id: string }) {
  if (id === 'skillverse') {
    return (
      <svg
        viewBox="0 0 400 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '160px', display: 'block' }}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="skillPulse" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--border)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="100" r="70" fill="url(#skillPulse)" />

        {/* Abstract neural network nodes */}
        {[60, 140, 220, 300, 380].map((x, i) => (
          <circle key={i} cx={x} cy={100} r={5} fill="var(--border)" opacity={0.7} />
        ))}
        {[40, 120, 200, 280].map((x, i) => (
          <circle key={`t${i}`} cx={x} cy={60} r={4} fill="var(--border)" opacity={0.45} />
        ))}
        {[80, 160, 240, 320].map((x, i) => (
          <circle key={`b${i}`} cx={x} cy={140} r={4} fill="var(--border)" opacity={0.45} />
        ))}

        {/* Connecting lines */}
        {[60, 140, 220, 300].map((x, i) => (
          <line key={`l${i}`} x1={x} y1={100} x2={x + 80} y2={100} stroke="var(--border-subtle)" strokeWidth={1.2} />
        ))}
        {[60, 140, 220].map((x, i) => (
          <line key={`d1${i}`} x1={x} y1={100} x2={x + 60} y2={60} stroke="var(--border-subtle)" strokeWidth={1} />
        ))}
        {[60, 140, 220].map((x, i) => (
          <line key={`d2${i}`} x1={x} y1={100} x2={x + 20} y2={140} stroke="var(--border-subtle)" strokeWidth={1} />
        ))}
        <circle cx={380} cy={100} r={12} fill="none" stroke="var(--border)" strokeWidth={1} opacity={0.6} />
        <circle cx={380} cy={100} r={5} fill="var(--text-tertiary)" opacity={0.5} />
      </svg>
    );
  }
  if (id === 'fair-distribution') {
    return (
      <svg
        viewBox="0 0 400 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '160px', display: 'block' }}
        aria-hidden="true"
      >
        {/* Subtle grid of cards representing dashboard metrics */}
        {[0, 1, 2].map(row =>
          [0, 1, 2, 3].map(col => (
            <rect
              key={`${row}-${col}`}
              x={22 + col * 94}
              y={24 + row * 52}
              width={78}
              height={38}
              rx={7}
              fill="var(--bg-glass)"
              stroke="var(--border-subtle)"
              strokeWidth={1}
            />
          ))
        )}
        {/* Progress bars in cells */}
        {[
          { x: 26, y: 50, w: 42 },
          { x: 120, y: 50, w: 58 },
          { x: 214, y: 50, w: 32 },
          { x: 308, y: 50, w: 50 },
        ].map((bar, i) => (
          <rect key={`bar${i}`} x={bar.x} y={bar.y} width={bar.w} height={4} rx={2} fill="var(--border)" opacity={0.6} />
        ))}
      </svg>
    );
  }
  // HR leave workflow visual
  return (
    <svg
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '160px', display: 'block' }}
      aria-hidden="true"
    >
      {[46, 156, 266, 362].map((x, i) => (
        <rect key={i} x={x} y={80} width={74} height={38} rx={8} fill="var(--bg-glass)" stroke="var(--border-subtle)" strokeWidth={1} />
      ))}
      {[120, 230, 340].map((x, i) => (
        <line key={`a${i}`} x1={x} y1={99} x2={x + 24} y2={99} stroke="var(--border)" strokeWidth={1.5} markerEnd="url(#arr2)" />
      ))}
      <defs>
        <marker id="arr2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--border)" />
        </marker>
      </defs>
      <text x={58} y={103} fontSize="10" fill="var(--text-tertiary)" fontFamily="Inter, sans-serif" fontWeight="500">Request</text>
      <text x={168} y={103} fontSize="10" fill="var(--text-tertiary)" fontFamily="Inter, sans-serif" fontWeight="500">Review</text>
      <text x={276} y={103} fontSize="10" fill="var(--text-tertiary)" fontFamily="Inter, sans-serif" fontWeight="500">Approve</text>
      <text x={372} y={103} fontSize="10" fill="var(--text-tertiary)" fontFamily="Inter, sans-serif" fontWeight="500">Done</text>
    </svg>
  );
}

function ProjectCard({ project, staggerClass }: { project: Project; staggerClass: string }) {
  // Ultra-efficient pointer-following spotlight without React state re-rendering
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.removeProperty('--mouse-x');
    e.currentTarget.style.removeProperty('--mouse-y');
  };

  return (
    <article
      className={`project-card ${staggerClass}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label={project.title}
    >
      {/* Visual illustration panel */}
      <div
        style={{
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <ProjectVisual id={project.id} />

        {/* Status badge */}
        {project.status === 'in-progress' && (
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.25rem 0.7rem',
              borderRadius: '9999px',
              background: 'var(--bg-card)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid var(--border)',
              fontSize: '0.7rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
            }}
          >
            <Clock size={11} aria-hidden="true" />
            <span>In progress</span>
          </div>
        )}
      </div>

      {/* Content body */}
      <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, position: 'relative', zIndex: 3 }}>
        {/* Category tag */}
        <span
          style={{
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-tertiary)',
            transition: 'color 0.25s ease',
          }}
        >
          {project.category}
        </span>

        {/* Title & subtitle */}
        <div>
          <h3
            className="project-title"
            style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              margin: '0 0 0.3rem',
              letterSpacing: '-0.02em',
            }}
          >
            {project.title}
          </h3>
          {project.subtitle && (
            <p style={{ fontSize: '0.84rem', color: 'var(--text-tertiary)', margin: 0, fontWeight: 500 }}>
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Description */}
        <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>
          {project.description}
        </p>

        {/* Key Features */}
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.45rem',
          }}
        >
          {project.features.slice(0, 4).map(f => (
            <li
              key={f}
              style={{
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.55rem',
                lineHeight: 1.5,
              }}
            >
              <span aria-hidden="true" style={{ color: 'var(--text-tertiary)', flexShrink: 0, marginTop: '1px' }}>—</span>
              <span>{f}</span>
            </li>
          ))}
          {project.features.length > 4 && (
            <li style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', paddingLeft: '1rem' }}>
              +{project.features.length - 4} more features
            </li>
          )}
        </ul>

        {/* Tech stack badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: 'auto', paddingTop: '0.75rem' }}>
          {project.stack.map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>

        {/* External links (only rendered when real links are provided) */}
        {(project.demoUrl || project.repoUrl) && (
          <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.5rem' }}>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '0.5rem 1.1rem', fontSize: '0.82rem' }}
              >
                <span>Live demo</span>
                <ExternalLink size={13} className="project-arrow-icon" aria-hidden="true" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ padding: '0.5rem 1.1rem', fontSize: '0.82rem' }}
              >
                <span>Repository</span>
                <ArrowUpRight size={13} className="project-arrow-icon" aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const { ref, visible } = useInView();

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className={`reveal ${visible ? 'visible' : ''} ambient-section-glow`}
      style={{ padding: '5.5rem 1.5rem' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <span className="section-label">Work</span>
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 2.85rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              margin: 0,
            }}
          >
            Selected work
          </h2>
        </div>

        {/* Interactive Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((p, idx) => (
            <ProjectCard
              key={p.id}
              project={p}
              staggerClass={`stagger-${Math.min(idx + 1, 4)}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
