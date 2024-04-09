import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
const { nextui } = require("@nextui-org/theme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/toggle.js",
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
      aspectRatio: {},
      borderRadius: {
        "primary-button": "12px",
      },
      borderWidth: {
        "2px": "2px",
        "1px": "1px",
      },
      opacity: {
        content1: "0.8",
      },
      colors: {
        background: {
          DEFAULT: colors.white,
        },
        foreground: {
          DEFAULT: colors.neutral[950],
        },
        primary: {
          foreground: colors.neutral[800],
        },
        secondary: {
          foreground: "#EE99C2",
        },
        card: colors.white,
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    nextui({
      themes: {
        light: {
          colors: {
            warning: {
              DEFAULT: "#EE99C2",
            },
          },
          focus: "#BEF264",
        },
      },
    }),
  ],
} satisfies Config;

export default config;
