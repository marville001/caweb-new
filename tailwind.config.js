module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
    extend: {
      colors: {
        "dodge-blue": "#236092",
        "sea-green": "#407b54",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
