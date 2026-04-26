import "tailwindcss";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{jsp,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        custom: " 0 0 10px #9333EA",
      },
      borderRadius: {
        card: "2.5rem",
      },
      colors: {
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",

        "main-purple": "var(--main-purple)",
        "accent-purple": "var(--accent-purple)",
        "main-aqua": "var(--main-aqua)",
        "main-neon": "var(--main-neon)",

        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          "light-muted": "var(--text-light-muted)",
          inverse: "var(--text-inverse)",
          active: "var(--color-active)",
          accent: "var(--text-accent)",
        },

        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
          dark: "var(--bg-dark-mode)",
          light: "var(--bg-light-mode)",
          "secondary-muted": "var(--bg-secondary-muted)",
          "light-muted": "var(--text-light-muted)",
          "primary-hover": "var(--text-primary-hover)",
          "inverse-hover": "var(--text-inverse-hover)",
          "overlay-dark": "var(--overlay-dark)",
          "overlay-light": "var(--overlay-light)",
        },

        surface: {
          primary: "var(--surface-primary)",
          secondary: "var(--surface-secondary)",
        },

        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          inverse: "var(--border-inverse)",
          dark: "var(--border-dark)",
          muted: "var(--border-muted)",
          light: "var(--border-light)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-text": "linear-gradient(to right, #ff7e5f, #feb47b)",
        "linear-section-gradient":
          "linear-gradient(180deg, var(--section-start) 20%, var(--section-end) 50%, var(--section-end) 100%)",
        "radial-section-gradient-light":
          "radial-gradient(50% 50% at 50% 50%, var(--section-start) 0%, var(--section-end) 100%)",
        "radial-section-gradient-dark":
          "radial-gradient(1200px circle at 50% 0%, var(--accentGrey), transparent 70%), var(--mainBlack) 0%, linear-gradient(to bottom, var(--gradient-start), var(--addGray))",
      },
      backgroundClip: {
        text: "text",
      },
      animation: {
        "gradient-x": "gradient-x 5s ease infinite",
        "gradient-xy": "gradient-xy 5s ease infinite",
        marquee: "marquee 10s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  variants: {
    backgroundImage: ["responsive", "hover", "focus"],
    backgroundClip: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
export default config;
