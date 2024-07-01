/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx,json}'],
  theme: {
    slant: {
      1: '1',
      2: '2',
      4: '4',
      8: '8',
    },
    extend: {
      colors: {
        'base-x': 'var(--base-x)',
        base: 'var(--base)',
        'base-m': 'var(--base-m)',
        'base-s': 'var(--base-s)',
        txtPrimary: 'var(--txtPrimary)',
        txtSecondary: 'var(--txtSecondary)',
        'primary-more': 'var(--primary-more)',
        primary: 'var(--primary)',
        'primary-shade': 'var(--primary-shade)',
        'primary-less': 'var(--primary-less)',
      },
      keyframes: ({ theme }) => ({
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shadowPulse: {
          '0%': { boxShadow: `0 0 0 0 ${theme('colors.primary')}` },
          '70%': { boxShadow: '0 0 0 10px rgba(0, 0, 0, 0)' },
          '100%': { boxShadow: '0 0 0 50px rgba(0, 0, 0, 0)' },
        },
      }),
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        shadowPulse: 'shadowPulse 2s ease-in-out infinite',
      },
      fontFamily: {
        code: 'Cascadia Code',
      },
      fontSize: {
        // because we override base with a color
        md: ['1rem', '1.5rem'],
      },
      borderColor: ({ theme }) => ({
        DEFAULT: theme('colors.primary'),
      }),
      screens: {
        minimum: '320px',
        xs: '430px',
        // sm 640px
        // md	768px
        // lg	1024px
        // xl	1280px
        // 2xl	1536px
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          slanted: value => ({
            clipPath: `polygon(0 0, 100% ${value}vw, 100% 100%, 0 calc(100% - ${value}vw))`,
            // padding: `${value}vw 0 ${value}vw 0`,
          }),
        },
        { values: theme('slant') }
      );
    }),
  ],
};
