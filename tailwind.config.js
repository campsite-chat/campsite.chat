const { colors } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-anybody)"],
      },
      colors: {
        "charcoal": {
          50: "#F2F2F2",
          100: "#E8E8E8",
          200: "#CFCFCF",
          300: "#B8B8B8",
          400: "#A1A1A1",
          500: "#888888",
          600: "#6E6E6E",
          700: "#525252",
          800: "#363636",
          900: "#1C1C1C"
        },
        "snow": {
          50: "#FCFCFD",
          100: "#FCFCFD",
          200: "#F9FAFB",
          300: "#F2F4F8",
          400: "#EFF1F6",
          500: "#ECEFF4",
          600: "#AEBBD0",
          700: "#7187AD",
          800: "#475A7B",
          900: "#242D3D"
        },
        "red": {
          50: "#F9F0F1",
          100: "#F2DEE0",
          200: "#E6C1C5",
          300: "#D9A1A6",
          400: "#CC8088",
          500: "#BF616A",
          600: "#A3424C",
          700: "#7B3239",
          800: "#532227",
          900: "#281013"
        },
        "green": {
          50: "#F5F8F2",
          100: "#EDF2E8",
          200: "#DBE5D1",
          300: "#C8D8BB",
          400: "#B6CBA4",
          500: "#A3BE8C",
          600: "#82A763",
          700: "#627F48",
          800: "#415530",
          900: "#212A18"
        },
        "blue": {
          50: "#F1F5F8",
          100: "#E7EDF3",
          200: "#CCD9E6",
          300: "#B4C7DA",
          400: "#98B3CD",
          500: "#81A1C1",
          600: "#5480AB",
          700: "#406182",
          800: "#2A4055",
          900: "#16212C"
        },
        "yellow": {
          50: "#FDF9F2",
          100: "#FBF5E9",
          200: "#F7EACF",
          300: "#F3E0B9",
          400: "#EFD6A4",
          500: "#EBCB8B",
          600: "#E0AF4D",
          700: "#BF8B21",
          800: "#7E5B16",
          900: "#412F0B"
        },
        "orange": {
          50: "#FAF2F0",
          100: "#F6E8E4",
          200: "#ECCEC5",
          300: "#E3B8AB",
          400: "#D99E8C",
          500: "#D08770",
          600: "#C05D3F",
          700: "#924730",
          800: "#602F20",
          900: "#321810"
        },
        "purple": {
          50: "#F7F3F6",
          100: "#F1EAEF",
          200: "#E0D1DE",
          300: "#D2BCCE",
          400: "#C2A3BC",
          500: "#B48EAD",
          600: "#996690",
          700: "#744D6D",
          800: "#4D3348",
          900: "#281A25"
        },
        ...colors
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}