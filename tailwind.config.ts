import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#371A9A',
          button:  '#040264',
          deepest: '#022359',
        },
        surface: {
          input: '#FBFBFB',
        },
        border: {
          input:   '#DED9EA',
          divider: '#DED9EA',
          tab:     '#DED9EA',
        },
        ink: {
          heading: '#3B2963',
          body:    '#5B4198',
          muted:   '#9991B3',
          link:    '#3B2963',
        },
      },
      fontFamily: {
        sans: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        input: '8px',
        btn:   '8px',
        icon:  '10px',
        pill:  '20px',
        card:  '16px',
      },
      height: {
        input:    '56px',
        'btn-lg': '60px',
      },
      maxWidth: {
        'login-card': '747px',
        hero:         '982px',
      },
      backgroundImage: {
        'hero': "url('/images/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
}

export default config
