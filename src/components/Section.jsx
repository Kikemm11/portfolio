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
      className="border-t border-line/60 px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16 2xl:px-24"
    >
      <div className="w-full">
        {(eyebrow || title) && (
          <Reveal className="mb-8 max-w-4xl" direction={revealDirection}>
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
