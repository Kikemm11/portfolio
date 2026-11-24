import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { socials } from '../../data/socials';
import { useLanguage } from '../../context/useLanguage';
import TypewriterName from '../TypewriterName';

const socialLinks = [
  { key: 'github', Icon: FaGithub },
  { key: 'linkedin', Icon: FaLinkedinIn },
  { key: 'email', Icon: FaEnvelope },
  { key: 'whatsapp', Icon: FaWhatsapp },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="mx-auto flex min-h-[70vh] max-w-content flex-col justify-center px-6 py-14 lg:px-8"
    >
      <div className="max-w-3xl animate-fade-in-up">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-content-secondary">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {t('hero.role')}
        </p>

        <TypewriterName />

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-content-secondary sm:text-xl">
          {t('hero.pitch')}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-accent-strong px-6 py-3 text-sm font-semibold text-canvas transition-colors hover:bg-accent"
          >
            {t('hero.viewProjects')}
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-line px-6 py-3 text-sm font-semibold text-content-primary transition-colors hover:border-accent hover:text-accent"
          >
            {t('hero.getInTouch')}
          </a>
        </div>

        <div className="mt-10 flex items-center gap-5">
          {socialLinks.map(({ key, Icon }) => (
            <a
              key={key}
              href={socials[key].href}
              aria-label={t(`socials.${key}`)}
              target={key === 'email' ? undefined : '_blank'}
              rel={key === 'email' ? undefined : 'noopener noreferrer'}
              className="text-content-muted transition-colors hover:text-accent"
            >
              <Icon className="text-xl" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
