import { CSSColor } from "./types";

const getLightSolid = (r: number, g: number, b: number, a: number) => {
  const getColor = (color: number) =>
    255 - Math.floor((255 - color) * (a / 100));

  return `rgb(${getColor(r)}, ${getColor(g)}, ${getColor(b)})`;
};

const getLightColor = (r: number, g: number, b: number, main: CSSColor) => ({
  main,
  alpha: (a: number) => `rgba(${r}, ${g}, ${b}, ${a / 100})`,
  solid: (a: number) => getLightSolid(r, g, b, a),
});

const getDarkSolid = (r: number, g: number, b: number, a: number) => {
  const getColor = (color: number) => Math.floor(color * (a / 100));

  return `rgb(${getColor(r)}, ${getColor(g)}, ${getColor(b)})`;
};

const getDarkColor = (r: number, g: number, b: number, main: CSSColor) => ({
  main,
  alpha: (a: number) => `rgba(${r}, ${g}, ${b}, ${a / 100})`,
  solid: (a: number) => getDarkSolid(r, g, b, a),
});

const light = {
  text: getLightColor(0, 0, 0, "black"),
  background: getLightColor(255, 255, 255, "white"),
  white: getLightColor(255, 255, 255, "white"),
  black: getLightColor(0, 0, 0, "black"),
  gray: getLightColor(136, 136, 136, "#888888"),
  red: getLightColor(252, 79, 79, "#FC4F4F"),
  green: getLightColor(74, 216, 113, "#4AD871"),
  blue: getLightColor(60, 137, 255, "#3C89FF"),
  yellow: getLightColor(255, 191, 68, "#FFBF44"),
};

const dark = {
  text: getDarkColor(255, 255, 255, "white"),
  background: getDarkColor(0, 0, 0, "black"),
  white: getDarkColor(255, 255, 255, "white"),
  black: getDarkColor(0, 0, 0, "black"),
  gray: getDarkColor(136, 136, 136, "#888888"),
  red: getDarkColor(252, 79, 79, "#FC4F4F"),
  green: getDarkColor(74, 216, 113, "#4AD871"),
  blue: getDarkColor(60, 137, 255, "#3C89FF"),
  yellow: getDarkColor(255, 191, 68, "#FFBF44"),
};

const colors = { light, dark };

export default colors;
