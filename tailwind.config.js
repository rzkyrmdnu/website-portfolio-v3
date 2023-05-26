/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        rubik: ['Rubik'],
      },
      colors: {
        sky: '#0099FF',
        dark: '#141517',
        dark2: '#1A1B1E',
        dark3: '#2C2E33',
        dark4: '#343A40',
        dark5: '#25262B',
        white2: '#F8F9FA',
        white3: '#C1C2C5',
        white4: '#F1F3F5',
      },
      screens: {
        '2xl': '1320px',
      },
      keyframes: {
        loader: {
          to: {
            opacity: 0.1,
            transform: 'translate3d(0, -1rem, 0)',
          },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },

      animation: {
        spin: 'spin 1s linear infinite',
        loader: 'loader 0.6s infinite alternate',
      },
    },
  },
  plugins: [],
};
