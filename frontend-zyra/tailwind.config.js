/** @type {import('tailwindcss').Config} */
const { LUXURY_COLORS, LUXURY_TYPOGRAPHY, LUXURY_SPACING, LUXURY_SHADOWS, LUXURY_ANIMATIONS, LUXURY_BREAKPOINTS, LUXURY_Z_INDEX } = require('./src/lib/constants');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ===== LUXURY COLORS =====
      colors: {
        ...LUXURY_COLORS,
        // Semantic color mappings
        primary: {
          DEFAULT: LUXURY_COLORS['obsidian-black'],
          light: LUXURY_COLORS['charcoal-grey'],
          dark: '#000000',
        },
        secondary: {
          DEFAULT: LUXURY_COLORS['royal-gold'],
          light: LUXURY_COLORS['champagne'],
          dark: LUXURY_COLORS['autumn-cognac'],
        },
        accent: {
          DEFAULT: LUXURY_COLORS['deep-emerald'],
          light: LUXURY_COLORS['spring-sage'],
          dark: LUXURY_COLORS['midnight-sapphire'],
        },
        neutral: {
          50: LUXURY_COLORS['winter-frost'],
          100: LUXURY_COLORS['pearl-white'],
          200: LUXURY_COLORS['platinum-silver'],
          300: LUXURY_COLORS['warm-cream'],
          400: LUXURY_COLORS['champagne'],
          500: LUXURY_COLORS['charcoal-grey'],
          600: LUXURY_COLORS['graphite'],
          700: LUXURY_COLORS['obsidian-black'],
          800: '#000000',
          900: '#000000',
        },
      },
      
      // ===== LUXURY TYPOGRAPHY =====
      fontFamily: {
        display: LUXURY_TYPOGRAPHY.fonts.display,
        heading: LUXURY_TYPOGRAPHY.fonts.heading,
        body: LUXURY_TYPOGRAPHY.fonts.body,
        accent: LUXURY_TYPOGRAPHY.fonts.accent,
        sans: LUXURY_TYPOGRAPHY.fonts.body,
        serif: LUXURY_TYPOGRAPHY.fonts.display,
      },
      
      fontSize: {
        'hero': LUXURY_TYPOGRAPHY.scale.hero,
        'h1': LUXURY_TYPOGRAPHY.scale.h1,
        'h2': LUXURY_TYPOGRAPHY.scale.h2,
        'h3': LUXURY_TYPOGRAPHY.scale.h3,
        'h4': LUXURY_TYPOGRAPHY.scale.h4,
        'body': LUXURY_TYPOGRAPHY.scale.body,
        'small': LUXURY_TYPOGRAPHY.scale.small,
        'caption': LUXURY_TYPOGRAPHY.scale.caption,
      },
      
      fontWeight: LUXURY_TYPOGRAPHY.weights,
      lineHeight: LUXURY_TYPOGRAPHY.lineHeights,
      letterSpacing: LUXURY_TYPOGRAPHY.letterSpacing,
      
      // ===== LUXURY SPACING =====
      spacing: LUXURY_SPACING,
      
      // ===== LUXURY SHADOWS =====
      boxShadow: {
        ...LUXURY_SHADOWS,
        // Additional luxury shadows
        'luxury-sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'luxury-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'luxury-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'luxury-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'luxury-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.3)',
        'emerald-glow': '0 0 20px rgba(53, 94, 59, 0.3)',
      },
      
      // ===== LUXURY ANIMATIONS =====
      transitionDuration: {
        'fast': '200ms',
        'medium': '300ms',
        'slow': '500ms',
        'luxury': '400ms',
      },
      
      transitionTimingFunction: LUXURY_ANIMATIONS.easing,
      
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'luxury-hover': 'luxuryHover 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'gold-pulse': 'goldPulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        luxuryHover: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-2px) scale(1.02)' },
          '100%': { transform: 'translateY(-4px) scale(1.05)' },
        },
        goldPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      
      // ===== LUXURY BREAKPOINTS =====
      screens: LUXURY_BREAKPOINTS,
      
      // ===== LUXURY Z-INDEX =====
      zIndex: LUXURY_Z_INDEX,
      
      // ===== LUXURY GRADIENTS =====
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, var(--obsidian-black) 0%, var(--charcoal-grey) 100%)',
        'gold-gradient': 'linear-gradient(135deg, var(--royal-gold) 0%, var(--autumn-cognac) 100%)',
        'emerald-gradient': 'linear-gradient(135deg, var(--deep-emerald) 0%, var(--spring-sage) 100%)',
        'pearl-gradient': 'linear-gradient(135deg, var(--pearl-white) 0%, var(--warm-cream) 100%)',
      },
      
      // ===== LUXURY BACKDROP =====
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}