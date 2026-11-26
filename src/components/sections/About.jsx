import meImage from '../../assets/me.webp';
import { useLanguage } from '../../context/useLanguage';
import Reveal from '../Reveal';
import Section from '../Section';

export default function About() {
  const { t } = useLanguage();

  const facts = [
    { value: '5+', label: t('about.experience') },
    { value: '8+', label: t('about.shipped') },
    { value: '2', label: t('about.apps') },
  ];

  return (
    <Section
      id="about"
      eyebrow={t('about.eyebrow')}
      title={t('about.title')}
      description={t('about.description')}
    >
      <div className="grid items-center gap-8 lg:grid-cols-[320px_1fr] lg:gap-12">
        <Reveal>
          <img
            src={meImage}
            alt="Iván Maldonado"
            className="h-auto w-full max-w-[320px] rounded-xl border border-line object-cover aspect-[3/4]"
          />
        </Reveal>

        <Reveal delay={100}>
          <div>
            <div className="max-w-5xl space-y-5 text-base leading-relaxed text-content-secondary">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 border-t border-line pt-8 sm:grid-cols-3">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <p className="text-3xl font-semibold tracking-tight text-accent">
                    {fact.value}
                  </p>
                  <p className="mt-1 text-sm text-content-muted">{fact.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
