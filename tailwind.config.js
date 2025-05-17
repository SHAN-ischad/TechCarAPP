/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            animation: {
                'move-side': 'move-side 2s infinite ease-in-out'
            },
            keyframes: {
                'move-side': {
                    '0%': { transform: 'translateX(0)' },
                    '50%': { transform: 'translateX(10px)' },
                    '100%': { transform: 'translateX(0)' },
                }
            }
        },
    },
    plugins: [],
}