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
        "btn-lg": `calc(16.81481px + 0.37037vw)`,
        "m-nav-item": "calc(17.62963px + 0.74074vw)",
        intro: `calc(18.51852px + .46296vw)`,
        xl: "calc(18.14815px + 3.7037vw)",
      },
      fontFamily: {
        kufam: "var(--font-kufam)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: {
        header: `var(--header-padding)`,
        "header-height": `calc(var(--header-padding)*3)`,
        custom: `calc(14.40741px + 0.18519vw)`,
        ct: `calc(var(--ct-padding))`,
        "ct-1.5-2": `calc(calc(var(--ct-padding)*1.5)*1.5)`,
        "ct-1.5": `calc(var(--ct-padding)*1.5)`,
        "m-nav-item": "calc(8.51852px + .46296vw) calc(22.03704px + .92593vw)",
      },
      margin: {
        custom: `calc(14.40741px + 0.18519vw)`,
        ct: `calc(var(--ct-padding))`,
        "ct-1.5-divide": `calc(var(--ct-padding)/1.5)`,
        "ct-1.5": `calc(var(--ct-padding)*1.5)`,
        banner: "calc(-46.2963px - 7.40741vw)",
      },
      transitionDuration: {
        600: `600ms`,
      },
      textShadow: {
        sm: "0 0 0 var(--tw-shadow-color)",
        DEFAULT: "0 1px 2px var(--tw-shadow-color)",
      },
      animation: {
        "lg-home": "lg-home linear infinite",
      },
      keyframes: {
        "lg-home": {
          "0%": { transform: "translateY(2%)" },
          "60%": { transform: "translateY(-3%)" },
          to: { transform: "translateY(2%)" },
        },
      },
      height: {
        "network-image": "calc(39.07407px + 1.85185vw)",
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
