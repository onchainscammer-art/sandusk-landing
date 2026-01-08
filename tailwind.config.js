/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'crayon-red': '#ED1C24',
        'crayon-orange': '#FF7F27',
        'crayon-yellow': '#FFF200',
        'crayon-blue': '#0066CC',
        'crayon-lightblue': '#00A8E1',
        'paper': '#FDFBF7',
      },
      fontFamily: {
        'marker': ['"Permanent Marker"', 'cursive'],
        'hand': ['"Patrick Hand"', '"Gochi Hand"', 'cursive'],
      },
      animation: {
        'wiggle': 'wiggle 0.5s ease-in-out infinite',
        'glitch': 'glitch 0.3s cubic-bezier(.25, .46, .45, .94) both',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
    },
  },
  plugins: [],
}
