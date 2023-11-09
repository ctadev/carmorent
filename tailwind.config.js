/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'neutral-900': '#1D1178',
        'neutral-800': '#2D1D92',
        'neutral-700': '#432EB5',
        'neutral-600': '#5E43D8',
        'neutral-500': '#7C5CFC',
        'neutral-400': '#9F84FD',
        'neutral-300': '#B4DFE',
        'neutral-200': '#CEBEFE',
        'neutral-100': '#E7DEFE',
        'neutral-0': '#FFFFFF',

        'success-900': '#3B6506',
        'success-800': '#4C7A0B',
        'success-700': '#659711',
        'success-600': '#7FB519',
        'success-500': '#9CD323',
        'success-400': '#BCE455',
        'success-300': '#D3F178',
        'success-200': '#E8FAA6',
        'success-100': '#F5FCD1',

        'error-900': '#7A0619',
        'error-800': '#930B16',
        'error-700': '#B7112',
        'error-600': '#DB2719',
        'error-500': '#FF4423',
        'error-400': '#FF7F59',
        'error-300': '#FFA37A',
        'error-200': '#FFC8A6',
        'error-100': '#FFE7D3',

        'warning-900': '#7A4D0B',
        'warning-800': '#936312',
        'warning-700': '#B7821D',
        'warning-600': '#DBA32A',
        'warning-500': '#FFC73A',
        'warning-400': '#FFD96B',
        'warning-300': '#FFE488',
        'warning-200': '#FFEFB0',
        'warning-100': '#FFF8D7',

        'information-900': '#102E7A',
        'information-800': '#1A4393',
        'information-700': '#2A60B7',
        'information-600': '#3D81DB',
        'information-500': '#54A6FF',
        'information-400': '#7EC2FF',
        'information-300': '#98D3FF',
        'information-200': '#BAE5FF',
        'information-100': '#DCF3FF',

        'secondary-900': '#040815',
        'secondary-800': '#090c19',
        'secondary-700': '#0D121F',
        'secondary-600': '#131825',
        'secondary-500': '#1A202C',
        'secondary-400': '#596780',
        'secondary-300': '#90A3BF',
        'secondary-200': '#C3D4E9',
        'secondary-100': '#E0E9F4',

        'border-blue': 'rgba(195, 212, 233, 0.4)',
        'file-active': '#2196f3',
        'file-accept': '#00e676',
        'file-reject': '#ff1744',
        'overlay-black': 'rgba(0, 0, 0, 0.8)',
      },
      width: {
        215: '215px',
        357: '357px',
        557: '557px',
      },
      minWidth: {
        155: '155px',
        190: '190px',
        215: '215px',
        240: '240px',
        256: '256px',
        327: '327px',
      },
      height: {
        300: '300px',
        557: '557px',
      },
      inset: {
        45: '45%',
        65: '65px',
      },
      spacing: {
        65: '65px',
      },
      flex: {
        2: '2 2 0%',
      },
      lineHeight: {
        70: '70px',
      },
      zIndex: {
        '-5': '-5',
        0: '0',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};

