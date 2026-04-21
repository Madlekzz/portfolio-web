/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0d1117',
          card: '#161b22',
          border: '#30363d',
          text: '#e6edf3',
          textSec: '#9ca3af',
        },
        light: {
          bg: '#f8fafc',
          card: '#ffffff',
          border: '#e2e8f0',
          text: '#1e293b',
          textSec: '#64748b',
          amber: '#fef3c7',
        },
        orange: {
          primary: '#f97316',
          hover: '#fb923c',
          dim: '#fdba74',
        },
        amber: {
          warm: '#1a0f05',
        },
      },
      fontFamily: {
        mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom, #0d1117 0%, #0d1117 50%, #2a1a0a 100%)',
        'gradient-light': 'linear-gradient(to bottom, #f8fafc 0%, #f8fafc 60%, #fef3c7 100%)',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};