import { CSSProperties } from "react";

export type CSSColor = CSSProperties["color"];
export type ColorWithOpacity = (opacity: number) => CSSColor;

export type ThemeMode = "light" | "dark";
export type UserThemeMode = ThemeMode | "auto";

export interface ColorObject {
  main: CSSColor;
  alpha: ColorWithOpacity;
  solid: ColorWithOpacity;
}

// colors object
export interface colors {
  text: ColorObject;
  background: ColorObject;
  white: ColorObject;
  black: ColorObject;
  gray: ColorObject;
  red: ColorObject;
  green: ColorObject;
  blue: ColorObject;
  yellow: ColorObject;
}

export interface Theme {
  colors: colors;
  change: (mode: UserThemeMode) => void;
  mode: ThemeMode;
}
