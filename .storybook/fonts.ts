import localFont from "@next/font/local";

export const outfit = localFont({
  src: [
    {
      path: "../fonts/Outfit_500.woff2",
      weight: "700",
    },
    {
      path: "../fonts/Outfit_400.woff2",
      weight: "500",
    },
    {
      path: "../fonts/Outfit_300.woff2",
      weight: "400",
    },
    {
      path: "../fonts/Outfit_200.woff2",
      weight: "300",
    },
    {
      path: "../fonts/Outfit_100.woff2",
      weight: "100",
    },
  ],
  variable: "--font-outfit",
});

export const spoqa = localFont({
  src: [
    {
      path: "../fonts/SpoqaHanSansNeo-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/SpoqaHanSansNeo-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/SpoqaHanSansNeo-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/SpoqaHanSansNeo-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/SpoqaHanSansNeo-Thin.woff2",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-spoqa",
});

export const icon = localFont({
  src: "../fonts/insd-icons.woff",
  variable: "--font-icon",
});
