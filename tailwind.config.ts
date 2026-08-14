/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B1F3A',
          light: '#152C4F',
          dark: '#071525',
          50: '#E8EDEF',
          100: '#D0D9E3',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        accent: {
          DEFAULT: '#F97316',
          light: '#FB923C',
          dark: '#EA580C',
          50: '#FFF7ED',
          100: '#FFEDD5',
        },
        surface: {
          DEFAULT: '#F8FAFC',
          alt: '#F1F5F9',
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px rgba(11, 31, 58, 0.06)',
        medium: '0 4px 20px rgba(11, 31, 58, 0.1)',
        large: '0 8px 40px rgba(11, 31, 58, 0.12)',
        accent: '0 4px 14px rgba(249, 115, 22, 0.35)',
      },
    },
  },
  plugins: [],
};
