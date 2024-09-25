import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

import { colors } from "./src/styles/theme/colors"

const config = {
  darkMode: ["class"],
  content: [
    './src/**/*.{ts,tsx}',
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
				...colors
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "float-1": {
          "0%, 100%": { transform: "translate(0, 0) scale(1) rotate(0deg)" },
          "25%": { transform: "translate(80px, -80px) scale(1.05) rotate(15deg)" },
          "50%": { transform: "translate(0, -160px) scale(1.1) rotate(30deg)" },
          "75%": { transform: "translate(-80px, -80px) scale(1.05) rotate(15deg)" },
        },
        "float-2": {
          "0%, 100%": { transform: "translate(0, 0) scale(1) rotate(0deg)" },
          "25%": { transform: "translate(-120px, 120px) scale(1.16) rotate(-20deg)" },
          "50%": { transform: "translate(-240px, 0) scale(1.3) rotate(-40deg)" },
          "75%": { transform: "translate(-120px, -120px) scale(1.16) rotate(-20deg)" },
        },
        "float-3": {
          "0%, 100%": { transform: "translate(0, 0) scale(1) rotate(0deg)" },
          "25%": { transform: "translate(100px, 100px) scale(1.16) rotate(25deg)" },
          "50%": { transform: "translate(200px, 0) scale(2.5) rotate(50deg)" },
          "75%": { transform: "translate(100px, -100px) scale(1.16) rotate(25deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.4s ease-out",
        "accordion-up": "accordion-up 0.4s ease-out",
        "float-1": "float-1 20s ease-in-out infinite",
        "float-2": "float-2 25s ease-in-out infinite",
        "float-3": "float-3 22s ease-in-out infinite",
      },
			fontFamily: {
				'nunito-sans': ["var(--font-nunito-sans)", ...fontFamily.sans],
				'nunito': ["var(--font-nunito)", ...fontFamily.sans],
				'inter': ["var(--font-inter)", ...fontFamily.sans],
			}
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config