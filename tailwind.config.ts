import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        matrix: {
          green: "#00FF41",
          dark: "#0D0208",
          light: "#39FF14",
          accent: "#08F26E",
        },
        cyber: {
          primary: "#00FF41",
          secondary: "#08F26E",
          dark: "#0D0208",
          panel: "rgba(13, 2, 8, 0.7)",
          blue: "#0EA5E9",
          magenta: "#D946EF",
          purple: "#8B5CF6",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "matrix-rain": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "cyber-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "text-flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "cyber-glitch": {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        "3d-float": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)" },
          "50%": { transform: "translate3d(0, -20px, 50px) rotate3d(0, 1, 0, 180deg)" },
        },
        "hologram": {
          "0%, 100%": { 
            opacity: "1",
            filter: "hue-rotate(0deg) brightness(1)",
          },
          "50%": { 
            opacity: "0.8",
            filter: "hue-rotate(180deg) brightness(1.2)",
          },
        },
      },
      animation: {
        "matrix-rain": "matrix-rain 20s linear infinite",
        "cyber-pulse": "cyber-pulse 2s ease-in-out infinite",
        "text-flicker": "text-flicker 0.5s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "cyber-glitch": "cyber-glitch 0.5s ease-in-out infinite",
        "3d-float": "3d-float 10s ease-in-out infinite",
        "hologram": "hologram 3s ease-in-out infinite",
      },
      backgroundImage: {
        "cyber-grid": "linear-gradient(0deg, transparent 24%, rgba(0, 255, 65, .05) 25%, rgba(0, 255, 65, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 65, .05) 75%, rgba(0, 255, 65, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 65, .05) 25%, rgba(0, 255, 65, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 65, .05) 75%, rgba(0, 255, 65, .05) 76%, transparent 77%, transparent)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;