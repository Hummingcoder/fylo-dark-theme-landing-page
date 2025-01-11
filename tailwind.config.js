/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue-intro": "#1c2431",
        "dark-blue-main": "#181f2a",
        "dark-blue-footer": "#0b1523",
        "dark-blue-testimonials": "#202a3c",

        "cyan-accent": "#65e2d9",
        "blue-accent": "#339ecc",
        "light-red-error": "#ff4242",
      },
      fontFamily: {
        bai: ['"Bai Jamjuree"', "serif"],
      },
      screens: {
        xs: "425px",
        xxs: "375px",
      },
    },
  },
  plugins: [],
};
// xxs:h-[130vh] xs:h-[138vh]
