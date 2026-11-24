import { useEffect, useState } from 'react';

const NAME = 'Iván Maldonado';
const TYPE_DELAY = 90;
const HOLD_DELAY = 1000;
const ERASE_DELAY = 40;
const RESTART_DELAY = 350;

/** Types the name, holds it for a second, erases it and starts again. */
export default function TypewriterName() {
  const [text, setText] = useState('');
  const [phase, setPhase] = useState('typing');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (reducedMotion) return undefined;

    let timer;

    if (phase === 'typing') {
      if (text.length < NAME.length) {
        timer = setTimeout(
          () => setText(NAME.slice(0, text.length + 1)),
          TYPE_DELAY,
        );
      } else {
        timer = setTimeout(() => setPhase('holding'), 0);
      }
    } else if (phase === 'holding') {
      timer = setTimeout(() => setPhase('erasing'), HOLD_DELAY);
    } else if (phase === 'erasing') {
      if (text.length > 0) {
        timer = setTimeout(
          () => setText(NAME.slice(0, text.length - 1)),
          ERASE_DELAY,
        );
      } else {
        timer = setTimeout(() => setPhase('typing'), RESTART_DELAY);
      }
    }

    return () => clearTimeout(timer);
  }, [text, phase, reducedMotion]);

  const displayed = reducedMotion ? NAME : text;

  return (
    <h1
      aria-label={NAME}
      className="mt-8 text-4xl font-semibold leading-[1.1] tracking-tight text-content-primary sm:text-6xl lg:text-7xl"
    >
      <span aria-hidden="true">{displayed}</span>
      {!reducedMotion && (
        <span
          aria-hidden="true"
          className="ml-0.5 animate-cursor-blink text-accent"
        >
          |
        </span>
      )}
    </h1>
  );
}
