/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "page/*{html, js}", "page/info/*{html, js}"],
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
