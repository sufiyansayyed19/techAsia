// tailwind.config.js
import { fontFamily } from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // This sets 'Inter' as the default sans-serif font for your entire project.
        // The '...fontFamily.sans' part adds the default system fonts as fallbacks.
        sans: ['Inter', ...fontFamily.sans],
        
        // This adds 'Albert Sans' as a utility class, so you can use it like `font-albert`.
        albert: ['Albert Sans', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};