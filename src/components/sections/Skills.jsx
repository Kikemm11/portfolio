import { skillGroups } from '../../data/skills';
import { useLanguage } from '../../context/useLanguage';
import Reveal from '../Reveal';
import Section from '../Section';

export default function Skills() {
  const { t, loc } = useLanguage();

  return (
    <Section
      id="skills"
      eyebrow={t('skills.eyebrow')}
      title={t('skills.title')}
      description={t('skills.description')}
      revealDirection="right"
    >
      <div className="grid gap-8 md:grid-cols-2 lg:gap-x-12">
        {skillGroups.map((group, index) => (
          <Reveal key={group.name.en} delay={index * 80} direction="right">
            <h3 className="border-b border-line pb-3 text-sm font-semibold uppercase tracking-[0.16em] text-content-primary">
              {loc(group.name)}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-line bg-surface px-3 py-2 text-sm text-content-secondary transition-colors hover:border-accent hover:text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
