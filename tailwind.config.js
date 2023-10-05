/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: {
          "100": "#f9f3f3",
          "200": "#f9f1f1",
          "300": "#f6f2f2",
          "400": "#f6eeee",
          "500": "#f4eeee",
          "600": "#f2eded",
        },
        forestgreen: "#3eb74a",
        gold: "#ffe81d",
        gray: {
          "100": "#201818",
          "200": "#090808",
          "300": "rgba(32, 24, 24, 0.49)",
          "400": "rgba(10, 1, 1, 0.57)",
        },
        black: "#000",
        gainsboro: "#d9d9d9",
        linen: "rgba(234, 233, 224, 0.75)",
        lavenderblush: "#f5e9e9",
      },
      spacing: {},
      fontFamily: {
        "arial-hebrew": "'Arial Hebrew'",
        "aref-ruqaa-ink": "'Aref Ruqaa Ink'",
        "anek-telugu": "'Anek Telugu'",
        "adelle-sans-devanagari": "'Adelle Sans Devanagari'",
      },
    },
    fontSize: {
      "24xl": "43px",
      "26xl": "45px",
      "119xl": "138px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
