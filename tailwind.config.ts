import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,mdx,json}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          0: "#000000",
          50: "#070708",
          100: "#0b0b0d",
          200: "#101013",
          300: "#16161a",
          400: "#1d1d22",
          500: "#26262d",
          600: "#3a3a44",
          700: "#5b5b67",
          800: "#9a9aa6",
          900: "#d6d6dc",
          1000: "#ffffff",
        },
        accent: {
          DEFAULT: "#e5e5e5",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "Inter",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-sans)",
          "Inter",
          "Helvetica Neue",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
      },
      borderColor: {
        DEFAULT: "#1d1d22",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out both",
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 2.4s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
