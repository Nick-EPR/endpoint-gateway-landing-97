
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#93C851",
          foreground: "#ffffff",
          light: "#F2FCE2",
        },
        secondary: {
          DEFAULT: "#93C851",
          foreground: "#ffffff",
        },
        neutral: {
          DEFAULT: "#8E9196",
          light: "#F1F0FB",
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
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "emblem-wave-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "70%": {
            opacity: "1",
            transform: "scale(1.02)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "emblem-wave-out": {
          "0%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "100%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
        },
        "emblem-grid-pulse": {
          "0%, 100%": {
            opacity: "0.03",
          },
          "50%": {
            opacity: "0.02",
          },
        },
        "slide-fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(12px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "drift": {
          "0%, 100%": {
            backgroundPosition: "0px 0px",
          },
          "50%": {
            backgroundPosition: "10px 10px",
          },
        },
        "dot-pulse": {
          "0%, 100%": {
            opacity: "0.2",
          },
          "50%": {
            opacity: "1",
          },
        },
        "dot-wave": {
          "0%": {
            backgroundPosition: "0% 0%",
            opacity: "0.3",
          },
          "25%": {
            backgroundPosition: "50% 25%",
            opacity: "0.7",
          },
          "50%": {
            backgroundPosition: "100% 50%",
            opacity: "1",
          },
          "75%": {
            backgroundPosition: "50% 75%",
            opacity: "0.7",
          },
          "100%": {
            backgroundPosition: "0% 100%",
            opacity: "0.3",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "float": "float 3s ease-in-out infinite",
        "emblem-wave-in": "emblem-wave-in 0.6s ease-out both",
        "emblem-wave-out": "emblem-wave-out 0.4s ease-in forwards",
        "emblem-grid-pulse": "emblem-grid-pulse 4s ease-in-out 2s infinite",
        "slide-fade-in-left": "slide-fade-in-left 0.4s ease-out 1s both",
        "fade-left": "fade-left 0.5s ease-out forwards",
        "drift": "drift 20s ease-in-out infinite",
        "dot-pulse": "dot-pulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
