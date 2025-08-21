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
      },
    },
  },
  plugins: [],
}
