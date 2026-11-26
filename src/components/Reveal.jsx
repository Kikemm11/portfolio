import { useEffect, useRef, useState } from 'react';

/** Subtle fade/slide as elements enter the viewport. */
export default function Reveal({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible
          ? 'translate-x-0 translate-y-0 opacity-100'
          : `${direction === 'right' ? 'translate-x-12' : 'translate-y-5'} opacity-0`
      } ${className}`}
    >
      {children}
    </div>
  );
}
