/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // The double quotes are only needed here for this special font which is imported from Google Fonts
        title: ['"Pacifico"', 'cursive']
      }
    },
  },
  plugins: [],
};