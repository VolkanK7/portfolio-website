/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
   darkMode: 'class',
   theme: {
      extend: {
         fontFamily: {
            sans: ['var(--font-geist-sans)'],
            mono: ['var(--font-geist-mono)'],
         },
         animation: {
            'fade-in': 'fadeIn 1.5s ease-in-out forwards',
            'slide-up': 'slideUp 0.5s ease-in-out forwards',
            'slide-in': 'slideIn 0.5s ease-in-out forwards',
            'code-flow': 'codeFlow 15s linear infinite',
         },
         keyframes: {
            fadeIn: {
               '0%': { opacity: 0 },
               '100%': { opacity: 1 },
            },
            slideUp: {
               '0%': { transform: 'translateY(100px)', opacity: 0 },
               '100%': { transform: 'translateY(0)', opacity: 1 },
            },
            slideIn: {
               '0%': { transform: 'translateX(-100px)', opacity: 0 },
               '100%': { transform: 'translateX(0)', opacity: 1 },
            },
            codeFlow: {
               '0%': { transform: 'translateY(0)' },
               '100%': { transform: 'translateY(-50%)' },
            },
         },
      },
   },
   plugins: [],
};
