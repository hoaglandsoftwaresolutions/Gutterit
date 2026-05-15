/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1180px",
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0f2942",
          700: "#0c2236",
          800: "#091a29",
        },
        electric: {
          DEFAULT: "#0ea5e9",
          600: "#0284c7",
          700: "#036aa1",
        },
        amber: {
          DEFAULT: "#d97706",
          200: "#fbd388",
          600: "#b45f03",
          900: "#78350f",
        },
        cream: "#faf8f3",
        ink: "#1a1a1a",
        muted: {
          DEFAULT: "#6b6b6b",
          light: "#9aa0a6",
        },
        sky: {
          50: "#f1f7fb",
          300: "#7cb4d6",
          500: "#3f80a8",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
      },
      fontSize: {
        base: ["1rem", { lineHeight: "1.7" }],
      },
      boxShadow: {
        card: "0 1px 3px rgba(15,41,66,.06), 0 4px 16px rgba(15,41,66,.06)",
        cta: "0 6px 20px rgba(14,165,233,.3)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn .6s ease-out both",
        "fade-in-down": "fadeInDown .5s cubic-bezier(.22,1,.36,1) both",
        "fade-in-up": "fadeInUp .7s cubic-bezier(.22,1,.36,1) both",
      },
    },
  },
  plugins: [],
};
