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
                    blue: '#00d4ff',
                    purple: '#4a90d9',
                    pink: '#ff00ff',
                    green: '#0aff00',
                    gold: '#ffd700',
                    coral: '#ff6b6b'
                },
                bg: {
                    dark: '#0a1628',
                    card: 'rgba(255, 255, 255, 0.05)',
                    overlay: 'rgba(10, 22, 40, 0.8)'
                },
                accent: {
                    DEFAULT: '#00d4ff',
                    hover: '#4dd9ff'
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
                'marquee': 'marquee 15s linear infinite',
                'scroll-left-180': 'scroll-left-180 10s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    'from': { boxShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff' },
                    'to': { boxShadow: '0 0 20px #00d4ff, 0 0 30px #00d4ff' }
                },
                progress: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                },
                marquee: {
                    '0%': { transform: 'translateX(-50%)' },
                    '100%': { transform: 'translateX(0)' }
                },
                'scroll-left-180': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-180px)' },
                },
            }
        },
    },
    plugins: [],
}
