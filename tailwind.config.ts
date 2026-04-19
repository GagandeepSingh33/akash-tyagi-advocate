import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gold: {
          50:  "#fdf9ec",
          100: "#faf0ca",
          200: "#f4dd90",
          300: "#ecc84f",
          400: "#e4b428",
          500: "#c9941a",
          600: "#a97214",
          700: "#875214",
          800: "#714217",
          900: "#613618",
          DEFAULT: "#C9A84C",
        },
        navy: {
          50:  "#f0f4ff",
          100: "#dde6ff",
          200: "#c3d0ff",
          300: "#9db2ff",
          400: "#708aff",
          500: "#4a63ff",
          600: "#2d40f5",
          700: "#2030e1",
          800: "#1e28b6",
          900: "#1e278f",
          950: "#0A0F1E",
          DEFAULT: "#0A0F1E",
        },
        surface: {
          light: "#F9F7F2",
          dark: "#111827",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'DM Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-in-left": "slideInLeft 0.6s ease forwards",
        "slide-in-right": "slideInRight 0.6s ease forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A84C 0%, #f4dd90 50%, #C9A84C 100%)",
        "navy-gradient": "linear-gradient(135deg, #0A0F1E 0%, #1a2540 100%)",
        "hero-pattern": "radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.06) 0%, transparent 40%)",
      },
      boxShadow: {
        "gold": "0 0 30px rgba(201,168,76,0.2), 0 4px 20px rgba(201,168,76,0.1)",
        "gold-lg": "0 0 60px rgba(201,168,76,0.3), 0 8px 40px rgba(201,168,76,0.15)",
        "portrait": "0 25px 60px rgba(0,0,0,0.4), 0 10px 30px rgba(0,0,0,0.3), 0 0 0 1px rgba(201,168,76,0.2)",
        "card": "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
        "card-hover": "0 12px 40px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08)",
        "card-dark": "0 4px 24px rgba(0,0,0,0.3), 0 1px 4px rgba(0,0,0,0.2)",
        "card-dark-hover": "0 12px 40px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.3)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      transitionDuration: {
        "400": "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
