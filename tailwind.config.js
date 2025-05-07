/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                md: '2.5rem',
                lg: '2rem',
                xl: '3rem',
                '2xl': '4rem',
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#459D7A',
                    light: {
                        DEFAULT: '#C5E6D9',
                    }
                },
                success: {
                    DEFAULT: '#05FF00',
                },
                secondary: {
                    DEFAULT: '#323842',
                    50: '#979797'
                },
                warning: {
                    DEFAULT: '#FFC970',
                },
                dark: {
                    DEFAULT: '#000000',
                }
            },
        },
    },
    plugins: [],
}