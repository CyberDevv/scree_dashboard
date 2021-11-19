module.exports = {
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      colors: {
         primary: {
            darkest: '#0E122F',
            dark: '#25307E',
            light: '#4252C7',
            lightest: '#919ADE',
         },
         textBg: {
            darkest: '#121212',
            dark: '#525252',
            light: '#929292',
            lightest: '#D2D2D2',
         },
         secondary: {
            darkest: '#FA5020',
            dark: '#FC9D82',
            light: '#E8D3B7',
            lightest: '#FEEBE6',
         },
      },
      extend: {},
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
