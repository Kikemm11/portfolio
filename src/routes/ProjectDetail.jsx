import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ImageCarousel from '../components/ImageCarousel';
import { useLanguage } from '../context/useLanguage';
import { projects } from '../data/projects';

const tagClass =
  'rounded border border-line px-2 py-1 text-[11px] font-medium text-content-muted';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const { t, loc } = useLanguage();
  const project = projects.find((item) => item.id === projectId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [projectId]);

  if (!project) return <Navigate to="/" replace />;

  const position = projects.indexOf(project);
  const next = projects[(position + 1) % projects.length];
  const backLink = { to: '/', state: { scrollTo: 'projects' } };

  return (
    <main className="mx-auto max-w-content animate-fade-in-up px-6 py-12 lg:px-8">
      <Link
        {...backLink}
        className="inline-flex items-center gap-2 text-sm text-content-muted transition-colors hover:text-accent"
      >
        <FaArrowLeft /> {t('detail.back')}
      </Link>

      <div className="mt-8 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {loc(project.category)}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-content-primary sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-content-secondary">
          {loc(project.summary)}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className={tagClass}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-line bg-surface p-3 sm:p-4">
        <ImageCarousel
          images={project.images}
          className="rounded-xl"
          imageClassName="aspect-[16/9]"
        />
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="border-b border-line pb-3 text-sm font-semibold uppercase tracking-[0.16em] text-content-primary">
            {t('detail.overview')}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-content-secondary">
            {loc(project.details)}
          </p>
        </div>

        <div>
          <h2 className="border-b border-line pb-3 text-sm font-semibold uppercase tracking-[0.16em] text-content-primary">
            {t('detail.highlights')}
          </h2>
          <ul className="mt-5 space-y-3">
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
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
        <Link
          {...backLink}
          className="text-sm text-content-muted transition-colors hover:text-accent"
        >
          {t('detail.all')}
        </Link>
        <Link
          to={`/projects/${next.id}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          {t('detail.next')} {next.title} <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </main>
  );
}
