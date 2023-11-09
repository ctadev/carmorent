/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-500": "#3563E9",
        "blue-300": "#5CAFFC",
        "blue-100": "#94A7CB",
        "blue-50": "#C3D4E9",

        "gray-900": "#1A202C",
        "gray-800": "#424B5C",
        "gray-700": "#3D5278",
        "gray-400": "#3D5278",

        "white-0": "#FFFFFF",
        "white-100": "#F7F9FC",
        "white-200": "#F6F7F9",

        "border-blue": "rgba(195, 212, 233, 0.4)",
        "file-active": "#2196f3",
        "file-accept": "#00e676",
        "file-reject": "#ff1744",
        "overlay-black": "rgba(0, 0, 0, 0.8)",
        background: "#F6F7F9",
      },
      fontSize: {
        '3xl': '2rem',
        '4xl': '2.25rem',
        '5xl': '2.5rem',
        '6xl': '4.5rem',
      },
      width: {
        215: "215px",
        357: "357px",
        557: "557px",
      },
      minWidth: {
        155: "155px",
        190: "190px",
        215: "215px",
        240: "240px",
        256: "256px",
        327: "327px",
      },
      height: {
        300: "300px",
        557: "557px",
      },
      inset: {
        45: "45%",
        65: "65px",
      },
      spacing: {
        65: "65px",
      },
      flex: {
        2: "2 2 0%",
      },
      lineHeight: {
        70: "70px",
      },
      zIndex: {
        "-5": "-5",
        0: "0",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    backgroundImage: {
      herocar1: "url('img/herocar1.png')",
      herocar2: "url('img/herocar2.png')",
      herocar3: "url('img/bg-nocar.png')",
    },
  },
  plugins: [],
};
