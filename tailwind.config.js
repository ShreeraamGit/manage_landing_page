/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    screens: {
      tablet: '850px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        desktop: "url('/public/bg-simplify-section-desktop.svg')",
        mobile: "url('/public/bg-simplify-section-mobile.svg')",
        tablet: "url('/public/bg-tablet-pattern.svg')",
      },
    },
  },
  plugins: [],
};
