/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFA726",
        secondary: "#FFE4BC",
      },
      fontFamily: {
        poppinsLight: ["Poppins-Light", "sans-serif"],
        poppinsLightItalic: ["Poppins-LightItalic", "sans-serif"],
        poppinsRegular: ["Poppins-Regular", "sans-serif"],
        poppinsItalic: ["Poppins-Italic", "sans-serif"],
        poppinsMedium: ["Poppins-Medium", "sans-serif"],
        poppinsMediumItalic: ["Poppins-MediumItalic", "sans-serif"],
        poppinsSemiBold: ["Poppins-SemiBold", "sans-serif"],
        poppinsSemiBoldItalic: ["Poppins-SemiBoldItalic", "sans-serif"],
        poppinsBold: ["Poppins-Bold", "sans-serif"],
        poppinsBoldItalic: ["Poppins-BoldItalic", "sans-serif"],
        poppinsExtraBold: ["Poppins-ExtraBold", "sans-serif"],
        poppinsExtraBoldItalic: ["Poppins-ExtraBoldItalic", "sans-serif"],
        poppinsBlack: ["Poppins-Black", "sans-serif"],
        poppinsBlackItalic: ["Poppins-BlackItalic", "sans-serif"],
        poppinsThin: ["Poppins-Thin", "sans-serif"],
        poppinsThinItalic: ["Poppins-ThinItalic", "sans-serif"],
        poppinsExtraLight: ["Poppins-ExtraLight", "sans-serif"],
        poppinsExtraLightItalic: ["Poppins-ExtraLightItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
