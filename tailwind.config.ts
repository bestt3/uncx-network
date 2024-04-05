import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg1: { DEFAULT: "rgba(5, 0, 12)", 95: "rgba(5, 0, 12, 0.95)" },
        bg2: "rgb(44, 32, 61)",
        txt1: "rgb(255, 255, 255)",
        color1: "rgb(0, 254, 52)",
        color2: "rgb(4, 212, 131)",
        color3: "rgb(50, 102, 255)",
        color4: "rgb(148, 23, 255)",
      },
      fontSize: {
        base: "calc(12.40741px + .18519vw)",
        "md-1": "calc(15.7037px + .09259vw)",
        "btn-md": `calc(15.7037px + 0.09259vw)`,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: {
        header: `calc(28.51852px + 0.46296vw)`,
        custom: `calc(14.40741px + 0.18519vw)`,
      },
      transitionDuration: {
        600: `600ms`,
      },
      textShadow: {
        sm: "0 0 0 var(--tw-shadow-color)",
        DEFAULT: "0 1px 2px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "text-shadow": (value: any) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
export default config;
