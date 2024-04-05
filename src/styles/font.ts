import localFont from "next/font/local";
import { Kufam } from "next/font/google";

export const kufam = Kufam({
  variable: "--font-kufam",
  subsets: ["latin"],
  display: "swap",
});

export const gilroy = localFont({
  variable: "--font-gilroy",
  src: [
    {
      path: "./fonts/gilroy/Gilroy-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/gilroy/Gilroy-Semibold.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/gilroy/Gilroy-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});
