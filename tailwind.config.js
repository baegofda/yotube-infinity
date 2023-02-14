module.exports = {
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          margin: '0 auto',
          paddingTop: '40px',
          paddingBottom: '80px',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
        },
        '.app-container': {
          margin: '0 auto',
          paddingTop: '20px',
          paddingBottom: '0',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
        },
      })
    },
  ],
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      // @media(min-width: ${screens}) screens:
      sm: { min: '576px' },
      md: { min: '768px' },
      lg: { min: '992px' },
      xl: { min: '1200px' },
    },
    fontFamily: {
      sans: ['Pretendard', 'sans-serif', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue'],
    },
    extend: {
      colors: {
        'mode-solo': '#ca9372',
        'mode-duo': '#5393CA',
        'mode-squad': '#759716',
        'mode-legacy': '#f0f3f5',
      },
    },
  },
}
