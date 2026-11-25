import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { socials } from '../../data/socials';
import { useLanguage } from '../../context/useLanguage';
import TypewriterName from '../TypewriterName';
import heroImage from '../../assets/hero.webp';

const socialLinks = [
  { key: 'github', Icon: FaGithub },
  { key: 'linkedin', Icon: FaLinkedinIn },
  { key: 'email', Icon: FaEnvelope },
  { key: 'whatsapp', Icon: FaWhatsapp },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={heroImage}
          alt=""
          className="h-full w-full object-cover object-center opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/30 to-canvas/10" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-content flex-col justify-center px-6 py-14 lg:px-8">
        <div className="max-w-3xl animate-fade-in-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-content-secondary">
            
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
              className="rounded-lg border border-line bg-surface/70 px-6 py-3 text-sm font-semibold text-content-primary transition-colors hover:border-accent hover:text-accent"
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
                className="text-content-secondary transition-colors hover:text-accent"
              >
                <Icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
