import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'warm-white': '#fdfbf7',
        'golden': '#d4af37',
        'golden-light': '#f4e4bc',
        'parchment': '#f4e8d0',
        'warm-gray': '#8b7d6b',
      },
      fontFamily: {
        'crimson': ['Crimson Text', 'serif'],
        'serif': ['Crimson Text', 'Georgia', 'serif'],
      },
      boxShadow: {
        'warm': '0 4px 20px rgba(212, 175, 55, 0.15)',
        'warm-lg': '0 10px 40px rgba(212, 175, 55, 0.2)',
      },
    },
  },
  plugins: [],
}
export default config
