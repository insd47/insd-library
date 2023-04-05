import { create } from "@storybook/theming/create";

export default create({
  base: "dark",
  // Typography
  fontBase: "Cagoit, Helvetica, Arial, sans-serif",
  fontCode: "monospace",

  brandTitle: "insd",
  brandUrl: "https://insd.dev",
  brandImage: "",
  brandTarget: "_self",

  //
  colorPrimary: "white",
  colorSecondary: "#3C89FF",

  // UI
  appBg: "black",
  appContentBg: "black",
  appBorderColor: "rgba(136, 136, 136, 0.4)",
  appBorderRadius: 8,

  // Text colors
  textColor: "white",
  textInverseColor: "black",

  // Toolbar default and active colors
  barTextColor: "white",
  barSelectedColor: "white",
  barBg: "black",

  // Form colors
  inputBg: "black",
  inputBorder: "black",
  inputTextColor: "black",
  inputBorderRadius: 2,
});
