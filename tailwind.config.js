/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "m-white": "#F4F4F4",
        "m-turquoise": "#5AC0C8",
        "m-blue": "#4E7597",
        "m-lightBlue": "#6087A9",
      },
      maxWidth: {
        container: "1280px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        "4xl": "32px",
      },
      keyframes: {
        scaleX: {
          "0%": { transform: "scaleX(0%)" },
          "100%": { transform: "scaleX(100%)" },
        },
        transformXOpacityIn: {
          "0%": { transform: "translateX(-2rem)", opacity: 0.5 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      animation: {
        "scale-x": "scaleX 250ms ease forwards",
        logoTitleIn: "transformXOpacityIn 700ms ease forwards 150ms",
      },
    },
  },
  plugins: [],
};
