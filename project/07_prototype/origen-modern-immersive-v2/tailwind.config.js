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
          bg: '#EBE9E2',      /* Warmer, deeper off-white */
          bgAlt: '#D5CCB4',   /* Earthy, atmospheric depth */
          text: '#221F1C',    /* Deep warm charcoal */
          accent: '#8C5A35',  /* Rich, slightly muted terracotta */
          muted: '#7A756D',   /* Warm grey for secondary text */
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
