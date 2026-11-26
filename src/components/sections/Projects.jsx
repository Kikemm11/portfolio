import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { featuredProjects, otherProjects } from '../../data/projects';
import { useLanguage } from '../../context/useLanguage';
import ImageCarousel from '../ImageCarousel';
import Reveal from '../Reveal';
import Section from '../Section';

function Tag({ children }) {
  return (
    <span className="rounded border border-line px-2 py-1 text-[11px] font-medium text-content-muted">
      {children}
    </span>
  );
}

function FeaturedCard({ project }) {
  const { loc } = useLanguage();

  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-surface lg:grid lg:grid-cols-[1.4fr_1fr]">
      <div className="p-3 sm:p-4">
        <ImageCarousel
          images={project.images}
          className="rounded-xl"
          imageClassName="aspect-[4/3]"
          projectId={project.id}
          projectTitle={project.title}
          context="featured"
        />
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-8">
        <h3 className="text-2xl font-semibold tracking-tight text-content-primary sm:text-3xl">
          {project.title}
        </h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <p className="mt-5 text-base leading-relaxed text-content-secondary">
          {loc(project.summary)}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-content-muted">
          {loc(project.details)}
        </p>

        <ul className="mt-5 space-y-2 border-t border-line pt-4">
          {(loc(project.highlights) ?? []).map((highlight) => (
            <li key={highlight} className="flex gap-3 text-sm text-content-secondary">
              <span
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                aria-hidden="true"
              />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function CompactCard({ project }) {
  const { loc, t } = useLanguage();

  return (
    <article className="flex h-full flex-col rounded-xl border border-line bg-surface p-3 transition-colors hover:border-line-strong">
      <ImageCarousel
        images={project.images}
        className="rounded-lg"
        imageClassName="aspect-[16/10]"
        projectId={project.id}
        projectTitle={project.title}
        context="grid"
      />

      <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
          {loc(project.category)}
        </p>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-content-primary">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-content-secondary">
          {loc(project.summary)}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="mt-auto pt-4">
          <Link
            to={`/projects/${project.id}`}
            className="flex items-center gap-2 border-t border-line pt-3 text-left text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            {t('projects.viewDetails')}
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <Section
      id="projects"
      eyebrow={t('projects.eyebrow')}
      title={t('projects.title')}
      description={t('projects.description')}
    >
      <div className="space-y-5">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.id} delay={index * 80}>
            <FeaturedCard project={project} />
          </Reveal>
        ))}
      </div>

      <div className="mt-12">
        <Reveal className="mb-5 flex items-baseline justify-between border-b border-line pb-3">
          <h3 className="text-lg font-semibold text-content-primary">
            {t('projects.more')}
          </h3>
          <span className="text-sm text-content-muted">
            {otherProjects.length} {t('projects.moreCount')}
          </span>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {otherProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 60} className="h-full">
              <CompactCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
