/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      backgroundImage: {
        'heaven': "url(/src/images/heaven-background.jpg)",
      }
    },
  },
  plugins: [],
}

