import { CSSProperties } from "react";
import type { InsdColor } from "./colors";

export type CSSColor = CSSProperties["color"];
export type ColorWithOpacity = (opacity: number) => CSSColor;

export type ThemeMode = "light" | "dark";
export type UserThemeMode = ThemeMode | "auto";

// absolute object
interface absolute {
  gray: InsdColor;
  red: InsdColor;
  green: InsdColor;
  blue: InsdColor;
  yellow: InsdColor;
}

// colors object
interface colors {
  text: {
    main: InsdColor;
    passive: {
      1: InsdColor;
      2: InsdColor;
      3: InsdColor;
    };
  };
  box: {
    background: InsdColor;
    overlay: InsdColor;
    foreground: {
      1: InsdColor;
      2: InsdColor;
      3: InsdColor;
    };
    filled: {
      1: InsdColor;
      2: InsdColor;
      3: InsdColor;
    };
    border: {
      1: InsdColor;
      2: InsdColor;
      3: InsdColor;
    };
    shadow: {
      1: InsdColor;
      2: InsdColor;
    };
  };
  secondary: {
    red: InsdColor;
    green: InsdColor;
    blue: InsdColor;
    yellow: InsdColor;
  };
}

export interface Theme {
  colors: colors;
  absolute: absolute;
  change: (mode: UserThemeMode) => void;
  mode: ThemeMode;
}
