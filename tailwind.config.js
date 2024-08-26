/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 8s linear infinite",
        meteor: "meteor 900s linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        meteor: {
          "0%": { transform: "rotate(290deg) translateX(50px)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(290deg) translateX(-1000px)",
            opacity: 0,
          },
        }
      },
      screens: {
        desktop_sm: '1420px' 
      }
    },
  },
  darkMode: ['variant', 'light'],
  plugins: [],
}

