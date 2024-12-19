/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkBg: '#070b0d', // Custom background for dark theme
        navy: '#1E3A8A',
        royal: '#2563EB',
        forest: '#10B981',
        goldenrod: '#F59E0B',
        lightGray: '#F3F4F6',
        darkGray: '#1F2937',
        textGray: '#E5E5E5',
        bord:'#3f3f3f',
        ActNavBg:'#323232'
      },
    },
  },
  plugins: [],
}

