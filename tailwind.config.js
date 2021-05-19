const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    aspectRatio: {
      '16/9': [16, 9]
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#fff',
            a: {
              color: '',

            },
            h1:{
              color: 'fbf8ff'
            },
            h2:{
              color: 'fbf8ff'
            },
            h3:{
              color: 'fbf8ff'
            },
            h4:{
              color: 'fbf8ff'
            },
            strong:{
              color: 'fbf8ff'
            },
            blockquote:{
              color: 'fbf8ff'
            },
            code: {
              color: 'fbf8ff'
            }
          },
        },
      },

      colors: {
        gray: colors.trueGray,
        'pr1sm-heliotrope': {
          50: '#fbf8ff',
          100: '#f7f1ff',
          200: '#ecddff',
          300: '#e1c8ff',
          400: '#ca9eff',
          500: '#b375ff',
          600: '#a169e6',
          700: '#8658bf',
          800: '#6b4699',
          900: '#58397d'
        },
        'pr1sm-royal-blue': {
          50: '#f8f8ff',
          100: '#f2f1ff',
          200: '#ddddff',
          300: '#c9c8ff',
          400: '#a19eff',
          500: '#7875ff',
          600: '#6c69e6',
          700: '#5a58bf',
          800: '#484699',
          900: '#3b397d'
        },
        'pr1sm-seagull': {
          50: '#f8fdff',
          100: '#f1fbff',
          200: '#ddf5ff',
          300: '#c8efff',
          400: '#9ee4ff',
          500: '#75d8ff',
          600: '#69c2e6',
          700: '#58a2bf',
          800: '#468299',
          900: '#396a7d'
        },
        'pr1sm-aquamarine': {
          50: '#f8fffb',
          100: '#f1fff8',
          200: '#ddffed',
          300: '#c8ffe3',
          400: '#9effcd',
          500: '#75ffb8',
          600: '#69e6a6',
          700: '#58bf8a',
          800: '#46996e',
          900: '#397d5a'
        },
        'pr1sm-canary': {
          50: '#fefff8',
          100: '#fdfff0',
          200: '#faffda',
          300: '#f7ffc4',
          400: '#f1ff97',
          500: '#ebff6b',
          600: '#d4e660',
          700: '#b0bf50',
          800: '#8d9940',
          900: '#737d34'
        },
        'pr1sm-rajah': {
          50: '#fffbf8',
          100: '#fff8f0',
          200: '#ffedda',
          300: '#ffe1c4',
          400: '#ffcb97',
          500: '#ffb56b',
          600: '#e6a360',
          700: '#bf8850',
          800: '#996d40',
          900: '#7d5934'
        },
        'pr1sm-carnation': {
          50: '#fff8f8',
          100: '#fff0f0',
          200: '#ffdada',
          300: '#ffc3c3',
          400: '#ff9696',
          500: '#ff6969',
          600: '#e65f5f',
          700: '#bf4f4f',
          800: '#993f3f',
          900: '#7d3333'
        }
      }
    }
  },
  variants: {
    aspectRatio: ['responsive'], // defaults to ['responsive']
    extend: {}
  },
  plugins: [require('tailwindcss-aspect-ratio'),
  require('@tailwindcss/typography')
  // ...
]
};
