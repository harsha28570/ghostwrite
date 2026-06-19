/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#A855F7',
          dark: '#9333EA',
          light: '#C084FC',
          muted: 'rgba(168, 85, 247, 0.15)',
        },
        background: {
          DEFAULT: '#0A0A0A',
          surface: '#111111',
          card: '#1A1A1A',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A1A1AA',
          tertiary: '#71717A',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(168, 85, 247, 0.5)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display': ['72px', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        'display-lg': ['96px', { lineHeight: '1.0', letterSpacing: '-0.04em' }],
        'h1': ['48px', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'h2': ['36px', { lineHeight: '1.15', letterSpacing: '-0.03em' }],
        'h3': ['24px', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        'body-lg': ['18px', { lineHeight: '1.7' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        'label': ['12px', { lineHeight: '1.4', letterSpacing: '0.06em' }],
      },
      borderRadius: {
        'btn': '8px',
        'card': '12px',
        'card-lg': '16px',
        'input': '8px',
      },
      boxShadow: {
        'glow': '0 0 60px rgba(168, 85, 247, 0.15)',
        'glow-sm': '0 0 30px rgba(168, 85, 247, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
