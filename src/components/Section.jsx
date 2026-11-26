import Reveal from './Reveal';

/** Shared wrapper that keeps spacing and section headings consistent. */
export default function Section({
  id,
  eyebrow,
  title,
  description,
  revealDirection = 'up',
  children,
}) {
  return (
    <section
      id={id}
      className="border-t border-line/60 px-6 py-12 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-content">
        {(eyebrow || title) && (
          <Reveal className="mb-8 max-w-2xl" direction={revealDirection}>
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-content-primary sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-relaxed text-content-secondary">
                {description}
              </p>
            )}
          </Reveal>
        )}
        <Reveal delay={80} direction={revealDirection}>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
