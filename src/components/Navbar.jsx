import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../context/useLanguage';

const links = [
  { id: 'about', key: 'nav.about' },
  { id: 'skills', key: 'nav.skills' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'contact', key: 'nav.contact' },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, t, toggleLanguage } = useLanguage();
  const isHome = location.pathname === '/';
  const nextLanguage = language === 'en' ? t('nav.spanish') : t('nav.english');

  useEffect(() => {
    if (!isHome) return undefined;

    const sections = ['home', ...links.map((link) => link.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  const goTo = (event, id) => {
    event.preventDefault();
    setMenuOpen(false);

    if (isHome) {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  const linkClass = (id) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      active === id
        ? 'bg-accent-soft text-accent'
        : 'text-content-secondary hover:text-content-primary'
    }`;

  const isDark = theme === 'dark';

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-canvas/85 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-content items-center justify-between px-6 py-4 lg:px-8"
      >
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={nextLanguage}
            title={nextLanguage}
            className="rounded-md border border-line px-2.5 py-2 text-xs font-semibold text-content-secondary transition-colors hover:border-accent hover:text-accent"
          >
            {t('nav.current')}
          </button>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? t('nav.lightTheme') : t('nav.darkTheme')}
            title={isDark ? t('nav.lightTheme') : t('nav.darkTheme')}
            className="rounded-md border border-line p-2 text-content-secondary transition-colors hover:border-accent hover:text-accent"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(event) => goTo(event, link.id)}
              className={linkClass(link.id)}
              aria-current={active === link.id ? 'location' : undefined}
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="rounded-md border border-line p-2 text-content-secondary transition-colors hover:text-content-primary md:hidden"
          aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-line bg-canvas px-6 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(event) => goTo(event, link.id)}
                className={linkClass(link.id)}
                aria-current={active === link.id ? 'location' : undefined}
              >
                {t(link.key)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
