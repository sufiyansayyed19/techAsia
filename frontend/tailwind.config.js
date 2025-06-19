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
      clipPath: {
        'ellipse-lg': 'ellipse(85% 100% at 50% 0%)',
        'ellipse-md': 'ellipse(160% 100% at 50% 0%)'
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-ellipse-lg': {
          'clip-path': 'ellipse(85% 100% at 50% 0%)',
        },
        '.clip-ellipse-md': {
          'clip-path': 'ellipse(160% 100% at 50% 0%)',
        },
      };
      addUtilities(newUtilities, ['responsive']);
    },  
  ],
};