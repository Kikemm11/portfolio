/**
 * Single source of truth for both color themes.
 *
 * main.jsx turns these values into CSS custom properties at runtime, and
 * tailwind.config.js maps semantic utilities (bg-canvas, text-accent, ...)
 * to those properties. Switching `data-theme` on <html> re-themes everything,
 * so no component ever contains a hardcoded color.
 */
export const themes = {
  light: {
    canvas: '#FAF9F6',
    surface: '#FFFFFF',
    surfaceHover: '#F2F0EB',
    border: '#E5E1DA',
    borderStrong: '#C9C3B9',
    content: {
      primary: '#1C1B19',
      secondary: '#55514B',
      muted: '#8A857D',
    },
    accent: {
      DEFAULT: '#A5502E',
      strong: '#8F4325',
      hover: '#843C20',
      soft: '#F7E8E1',
    },
  },
  dark: {
    canvas: '#1E1D1C',
    surface: '#272523',
    surfaceHover: '#322F2C',
    border: '#3A3733',
    borderStrong: '#514C46',
    content: {
      primary: '#F2EFEA',
      secondary: '#C4BFB7',
      muted: '#9A948B',
    },
    accent: {
      DEFAULT: '#E8A47F',
      strong: '#DC8E66',
      hover: '#F1B897',
      soft: '#3A2C25',
    },
  },
};

const toChannels = (hex) => {
  const raw = hex.replace('#', '');
  const full = raw.length === 3 ? raw.split('').map((c) => c + c).join('') : raw;
  const value = parseInt(full, 16);
  return `${(value >> 16) & 255} ${(value >> 8) & 255} ${value & 255}`;
};

const variablesFor = (theme) => ({
  '--color-canvas': theme.canvas,
  '--color-surface': theme.surface,
  '--color-surface-hover': theme.surfaceHover,
  '--color-border': theme.border,
  '--color-border-strong': theme.borderStrong,
  '--color-content-primary': theme.content.primary,
  '--color-content-secondary': theme.content.secondary,
  '--color-content-muted': theme.content.muted,
  '--color-accent': theme.accent.DEFAULT,
  '--color-accent-strong': theme.accent.strong,
  '--color-accent-hover': theme.accent.hover,
  '--color-accent-soft': theme.accent.soft,
});

const blockFor = (selector, theme) =>
  `${selector} {\n${Object.entries(variablesFor(theme))
    .map(([name, hex]) => `  ${name}: ${toChannels(hex)};`)
    .join('\n')}\n}`;

/** Injected once at startup so every color comes from this file. */
export const buildThemeStyles = () =>
  [
    blockFor(':root', themes.light),
    blockFor("[data-theme='dark']", themes.dark),
  ].join('\n\n');
