import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { personal } from '../data';
import { useActiveSection } from '../hooks';

interface NavProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Research', id: 'research' },
  { label: 'Contact', id: 'contact' },
];

export default function Nav({ theme, onToggleTheme }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection(navItems.map(item => item.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--nav-border)' : '1px solid transparent',
        transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
      }}
    >
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Monogram / Logo */}
        <a
          href="#top"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.65rem',
            textDecoration: 'none',
            flexShrink: 0,
            outline: 'none',
          }}
          aria-label="Back to top"
        >
          <span
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'var(--accent-dim)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.72rem',
              fontWeight: 800,
              color: 'var(--text-primary)',
              letterSpacing: '0.02em',
              transition: 'transform 0.25s ease, border-color 0.25s ease',
            }}
          >
            {personal.monogram}
          </span>
          <span
            style={{
              fontWeight: 600,
              fontSize: '0.92rem',
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em',
            }}
          >
            {personal.name.split(' ')[0]}
          </span>
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            listStyle: 'none',
            margin: 0,
            padding: '0.25rem 0.5rem',
            borderRadius: '9999px',
            background: scrolled ? 'var(--bg-glass)' : 'transparent',
            border: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
            transition: 'background-color 0.3s ease, border-color 0.3s ease',
          }}
          className="hidden md:flex"
        >
          {navItems.map(item => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Actions: Theme toggle + mobile hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <button
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            style={{
              background: 'var(--bg-glass)',
              border: '1px solid var(--border)',
              borderRadius: '9999px',
              padding: '0.4rem',
              cursor: 'pointer',
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              transition: 'border-color 0.2s ease, color 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)';
              (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
              (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
            }}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            style={{
              background: 'var(--bg-glass)',
              border: '1px solid var(--border)',
              borderRadius: '9999px',
              padding: '0.4rem',
              cursor: 'pointer',
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
            }}
            className="flex md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="mobile-menu-enter md:hidden"
          style={{
            background: 'var(--nav-bg)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1rem 1.5rem 1.5rem',
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
            }}
          >
            {navItems.map(item => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    style={{
                      display: 'block',
                      padding: '0.65rem 0.85rem',
                      fontSize: '0.95rem',
                    }}
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
