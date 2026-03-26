/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#F3EDE6',      /* sand / papel cálido */
          bgAlt: '#EADFD3',   /* clay-soft / adobe / cal */
          text: '#2B2B2B',    /* text-main / carbón cálido */
          accent: '#8C4A2F',  /* earth-deep / arcilla */
          accentLighter: '#A65E2E', /* earth / terracota */
          muted: '#6B6258',   /* tono tierra medio para secundarios */
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
