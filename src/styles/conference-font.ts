import localFont from "next/font/local";

export const conferenceFont = localFont({
  src: "./fonts/InterVariable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-conference",
  display: "swap",
});
