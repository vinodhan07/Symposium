/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'xs': '480px',
            },
            colors: {
                neon: {
                    blue: '#00f3ff',
                    purple: '#bc13fe',
                    pink: '#ff00ff',
                    green: '#0aff00'
                },
                bg: {
                    dark: '#050510',
                    card: 'rgba(255, 255, 255, 0.05)',
                    overlay: 'rgba(5, 5, 16, 0.8)'
                },
                accent: {
                    DEFAULT: '#bc13fe',
                    hover: '#d946ef'
                }
            },
            fontFamily: {
                orbitron: ['Orbitron', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'progress': 'progress 2s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    'from': { boxShadow: '0 0 10px #00f3ff, 0 0 20px #00f3ff' },
                    'to': { boxShadow: '0 0 20px #00f3ff, 0 0 30px #00f3ff' }
                },
                progress: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                }
            }
        },
    },
    plugins: [],
}
