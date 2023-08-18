import localFont from "@next/font/local";

export const main = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  variable: "--font-main",
});

export const icon = localFont({
  src: "../public/fonts/insd-icons.ttf",
  variable: "--font-icon",
});
