/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "page/**/*{html}", "page/info/**/*{html}"],
  theme: {
    container: {
      center: true,

      padding: "16px",
    },

    extend: {
      screens: {
        "2xl": "1300px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
