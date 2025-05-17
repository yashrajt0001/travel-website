/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   primary: "#618940",
      //   primaryDark: "#4a6a32",
      //   primaryLight: "#7aa359",
      //   secondary: {
      //     DEFAULT: "#e13861", // Red from logo
      //     dark: "#c42e51",
      //     light: "#e85c7f",
      //   },
      //   accent: "#f4d03f", // Complementary gold color
      //   light: "#F8F5F0",
      //   dark: "#1D1D1D",
      // },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero-bg.jpg')",
        "wellness-pattern": "url('/images/wellness-bg.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
