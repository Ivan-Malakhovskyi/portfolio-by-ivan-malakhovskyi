import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        custom: " 0 0 10px #9333EA",
      },
      colors: {
        mainBlack: "#000000",
        accentWhite: "#f1e7ff",
        addBlack: "#060708",
        accentBlack: "#0e0f11",
        mainWhite: "#ffffff",
        mainGreen: "#1ed760",
        mainGrey: "#959595",
        accentGrey: "#434455",
        addGray: "rgba(0, 0, 0, 0.1)",
        accentBgGrey: "#ffffff1a",
        mainBlue: "#4d5ae5",
        accentBlue: "#404bbf",
        addGreen: "#0e8538",
        accentGreen: "#a7d575",
        neon: "#a7d575",
        skyBlue: "#52abc4",
        aqua: "#37eaf7",
        purple: "#c624ee",
        purpleMain: "#4A0D67",
        purpleAccent: "#6B21A8",
        addPurple: "#8c21f8",
        mainPurple: "#2c0076",
        purpleAdd: "#9333EA",
        accentPurple: "#c591fc",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-text": "linear-gradient(to right, #ff7e5f, #feb47b)",
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
