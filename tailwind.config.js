/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                GelionRegular: ['Gelion-Regular'],
                GelionBlack: ['Gelion-Black'],
                GelionBold: ['Gelion-SemiBold'],
                SourceSerif4LightItalic: ['Source-Serif4-LightItalic'],
                SourceSerif4ExtraLight: ['Source-Serif4-ExtraLight'],
                SourceSerif4Regular: ['Source-Serif4-BoldItalic'],
            },
            fontSize: {
                '10xl': '10rem',
                '11xl': '16rem',
            },
            width: {
                200: '200%',
            },
        },
    },
    plugins: [],
};
