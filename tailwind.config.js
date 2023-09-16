/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zilla: ['"Zilla Slab"'],
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
};
