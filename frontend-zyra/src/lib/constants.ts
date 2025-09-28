// $100K Luxury E-commerce Design System
// Premium 16-color palette and design tokens

export const LUXURY_COLORS = {
  // Core Luxury Foundation
  'obsidian-black': '#0d0d0d',
  'pearl-white': '#fefefe',
  'royal-gold': '#d4af37',
  'platinum-silver': '#e5e4e2',

  // Sophisticated Neutrals
  'charcoal-grey': '#36454f',
  'warm-cream': '#f8f6f0',
  'champagne': '#f7e7ce',
  'graphite': '#41424c',

  // Emotional Luxury Accents
  'deep-emerald': '#355e3b',
  'midnight-sapphire': '#082567',
  'burgundy-wine': '#722f37',
  'rose-gold': '#e8b4a0',

  // Seasonal Luxury
  'spring-sage': '#9caf88',
  'summer-coral': '#ff7f7f',
  'autumn-cognac': '#a0522d',
  'winter-frost': '#f0f8ff',
} as const;

export const LUXURY_TYPOGRAPHY = {
  // Premium Font Families
  fonts: {
    display: ['Didot', 'serif'],
    heading: ['Futura PT', 'sans-serif'],
    body: ['Proxima Nova', 'sans-serif'],
    accent: ['Optima', 'sans-serif'],
  },
  
  // Typography Scale
  scale: {
    hero: 'clamp(3rem, 8vw, 8rem)',
    h1: 'clamp(2rem, 6vw, 4rem)',
    h2: 'clamp(1.5rem, 4vw, 2.5rem)',
    h3: 'clamp(1.25rem, 3vw, 2rem)',
    h4: 'clamp(1.125rem, 2.5vw, 1.5rem)',
    body: 'clamp(1rem, 2vw, 1.125rem)',
    small: 'clamp(0.875rem, 1.5vw, 1rem)',
    caption: 'clamp(0.75rem, 1.25vw, 0.875rem)',
  },
  
  // Font Weights
  weights: {
    thin: '100',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  
  // Line Heights
  lineHeights: {
    tight: '1.1',
    snug: '1.2',
    normal: '1.5',
    relaxed: '1.6',
    loose: '1.8',
  },
  
  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

export const LUXURY_SPACING = {
  // 8px Grid System
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
  '4xl': '6rem',    // 96px
  '5xl': '8rem',    // 128px
  '6xl': '12rem',   // 192px
} as const;

export const LUXURY_SHADOWS = {
  // Luxury Shadow System
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  
  // Luxury Specific Shadows
  luxury: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)',
  'luxury-lg': '0 32px 64px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.1)',
  'gold-glow': '0 0 20px rgba(212, 175, 55, 0.3)',
  'emerald-glow': '0 0 20px rgba(53, 94, 59, 0.3)',
} as const;

export const LUXURY_ANIMATIONS = {
  // Luxury Timing Functions
  timing: {
    fast: '0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    medium: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    luxury: '0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  
  // Easing Functions
  easing: {
    'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
    'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
    'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    'spring': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const;

export const LUXURY_BREAKPOINTS = {
  // Mobile-First Breakpoints
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const LUXURY_Z_INDEX = {
  // Z-Index Scale
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;

// Export all constants
export const LUXURY_DESIGN_SYSTEM = {
  colors: LUXURY_COLORS,
  typography: LUXURY_TYPOGRAPHY,
  spacing: LUXURY_SPACING,
  shadows: LUXURY_SHADOWS,
  animations: LUXURY_ANIMATIONS,
  breakpoints: LUXURY_BREAKPOINTS,
  zIndex: LUXURY_Z_INDEX,
} as const;
