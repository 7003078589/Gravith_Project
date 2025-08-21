/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gravit': {
          'bg-start': '#042B35',
          'bg-mid': '#063C49',
          'bg-end': '#073D4C',
          'accent': '#17CFE3',
          'text': '#E8F2F4',
        }
      },
      backgroundImage: {
        'gradient-gravit': 'linear-gradient(135deg, #042B35 0%, #063C49 50%, #073D4C 100%)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'tilt': 'tilt 10s infinite linear',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(0.5deg)' },
          '75%': { transform: 'rotate(-0.5deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #17CFE3, 0 0 10px #17CFE3, 0 0 15px #17CFE3' },
          '100%': { boxShadow: '0 0 10px #17CFE3, 0 0 20px #17CFE3, 0 0 30px #17CFE3' },
        },
      },
    },
  },
  plugins: [],
}
