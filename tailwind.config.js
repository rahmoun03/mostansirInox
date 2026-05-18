/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Logo color palette
        'charcoal-blue': '#2F3849',
        'jet-black': '#2E3745',
        'pale-slate': '#C3C7CB',
        'taupe': '#806C67',
        'pumpkin-spice': '#FD6B01',
        'pumpkin-dark': '#CC5600',
      },
      fontFamily: {
        arsenal: ['Arsenal', 'serif'],
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
