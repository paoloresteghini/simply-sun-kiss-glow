/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF7F0',
        sand: '#F2E9DA',
        linen: '#E8DCC8',
        bisque: '#D9C4A6',
        tan: '#C9A57C',
        bronze: '#A8835A',
        copper: '#8B6F47',
        walnut: '#4A3528',
        espresso: '#2B1D14',
        sage: '#A89B82',
        rose: '#D4A88C',
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        body: ['Jost', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        script: ['"Petit Formal Script"', 'cursive'],
      },
      letterSpacing: {
        'extra-wide': '0.28em',
      },
    },
  },
  plugins: [],
};
