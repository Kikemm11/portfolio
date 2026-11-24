import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useLanguage } from '../context/useLanguage';

/** Shows one image at a time with minimal controls and position dots. */
export default function ImageCarousel({ images, className = '', imageClassName = '' }) {
  const [index, setIndex] = useState(0);
  const { t } = useLanguage();
  const count = images.length;

  const go = (step) => setIndex((current) => (current + step + count) % count);

  return (
    <div className={`relative overflow-hidden bg-canvas ${className}`}>
      <img
        src={images[index].src}
        alt={images[index].alt}
        loading="lazy"
        className={`w-full object-cover ${imageClassName}`}
      />

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={t('image.previous')}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-line bg-canvas/85 p-2 text-content-secondary transition-colors hover:text-accent"
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={t('image.next')}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-line bg-canvas/85 p-2 text-content-secondary transition-colors hover:text-accent"
          >
            <FaChevronRight />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((image, dotIndex) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setIndex(dotIndex)}
                aria-label={t('image.show', { number: dotIndex + 1 })}
                aria-current={dotIndex === index ? 'true' : undefined}
                className={`h-1.5 rounded-full transition-all ${
                  dotIndex === index
                    ? 'w-5 bg-accent'
                    : 'w-1.5 bg-white/80 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
