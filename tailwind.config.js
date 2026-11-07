/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07070a",
          900: "#0b0b10",
          850: "#101016",
          800: "#15151d",
          700: "#1e1e29",
        },
        violet: { glow: "#8b5cf6" },
        electric: { DEFAULT: "#38bdf8", deep: "#3b82f6" },
      },
      fontFamily: {
        sans: ['"Inter Variable"', "Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        serif: ['"Instrument Serif"', "ui-serif", "Georgia", "serif"],
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(3%, -4%, 0) scale(1.08)" },
        },
        driftAlt: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(-4%, 3%, 0) scale(1.06)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
      },
      animation: {
        drift: "drift 26s ease-in-out infinite",
        "drift-alt": "driftAlt 32s ease-in-out infinite",
        shimmer: "shimmer 1.6s infinite",
        float: "float 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
