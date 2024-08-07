/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                GelionRegular: ['Gelion-Regular'],
                GelionBlack: ['Gelion-Black'],
                GelionBold: ['Gelion-SemiBold'],
            },
            fontSize: {
                '10xl': '10rem',
                '11xl': '16rem',
            },
        },
    },
    plugins: [],
};
