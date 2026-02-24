/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: '#FFFFFF',
                    alt: '#F9F9F7'
                },
                primary: {
                    DEFAULT: '#1A1A1A'
                },
                accent: {
                    trust: '#2E3A59',
                    action: '#E06D45',
                    success: '#4A7A68'
                }
            },
            fontFamily: {
                sans: ['Inter', 'Satoshi', 'sans-serif'],
                heading: ['"Plus Jakarta Sans"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            borderRadius: {
                'btn': '1.5rem',
                'card': '2.5rem',
            }
        },
    },
    plugins: [],
}
