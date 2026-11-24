import {
  FaExternalLinkAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';
import { socials } from '../../data/socials';
import { useLanguage } from '../../context/useLanguage';
import Reveal from '../Reveal';
import Section from '../Section';

const items = [
  { key: 'email', Icon: FaEnvelope },
  { key: 'linkedin', Icon: FaLinkedinIn },
  { key: 'whatsapp', Icon: FaWhatsapp },
  { key: 'github', Icon: FaGithub },
];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <>
      <Section
        id="contact"
        eyebrow={t('contact.eyebrow')}
        title={t('contact.title')}
        description={t('contact.description')}
      >
        <div className="max-w-2xl divide-y divide-line border-y border-line">
          {items.map(({ key, Icon }, index) => {
            const external = key !== 'email';
            return (
              <Reveal key={key} delay={index * 60}>
                <a
                  href={socials[key].href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 py-4"
                >
                  <Icon className="text-lg text-content-muted transition-colors group-hover:text-accent" />
                  <span className="w-20 shrink-0 text-sm text-content-muted sm:w-24">
                    {t(`socials.${key}`)}
                  </span>
                  <span className="break-all text-sm text-content-primary transition-colors group-hover:text-accent sm:text-base">
                    {socials[key].value}
                  </span>
                  <FaExternalLinkAlt className="ml-auto hidden shrink-0 text-xs text-content-muted transition-colors group-hover:text-accent sm:block" />
                </a>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-2 px-6 py-8 text-xs text-content-muted sm:flex-row lg:px-8">
          <span>{t('contact.copyright', { year: new Date().getFullYear() })}</span>
          <span>{t('contact.role')}</span>
        </div>
      </footer>
    </>
  );
}
