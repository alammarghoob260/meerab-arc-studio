import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: '#0A0A0A',
          dark: '#121214',
          surface: '#18181B',
          card: '#1C1C20',
          charcoal: '#222226',
          muted: '#8E8E93',
          border: '#27272A',
          ivory: '#FAF9F6',
          gold: '#D4AF37',
          'gold-dark': '#B89428',
          'gold-light': '#F3E5AB',
          'gold-glow': 'rgba(212, 175, 55, 0.25)',
          bronze: '#A16207', // WCAG AAA accessible gold for light mode text
          ochre: '#996515',  // Deep rich gold for light mode accents
        }
      },
      fontFamily: {
        serif: ['var(--font-cinzel)', 'serif'],
        sans: ['var(--font-josefin)', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'luxury': '0 20px 45px -15px rgba(0, 0, 0, 0.35)',
        'card-light': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.35)',
        'gold-glow-lg': '0 0 45px rgba(212, 175, 55, 0.45)',
      }
    },
  },
  plugins: [],
}
export default config
