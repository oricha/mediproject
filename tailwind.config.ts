import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C5A572',
        beige: '#F5E6DA',
        deep: '#0D1B2A',
        pure: '#FFFFFF'
      },
      fontFamily: {
        serif: ["var(--font-heading)", 'Georgia', 'Times New Roman', 'serif'],
        sans: ["var(--font-sans)", 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'gold-sm': '0 4px 14px 0 rgba(197,165,114,0.25)',
        'gold-md': '0 8px 30px rgba(197,165,114,0.35)'
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem'
      }
    },
  },
  plugins: [],
} satisfies Config
