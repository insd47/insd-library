import { CSSProperties } from "react";
import type { InsdColor } from "./colors";

export type CSSColor = CSSProperties["color"];
export type ColorWithOpacity = (opacity: number) => CSSColor;

export type ThemeMode = "light" | "dark";
export type UserThemeMode = ThemeMode | "system";

// absolute object
interface Absolute {
  gray: InsdColor;
  red: InsdColor;
  green: InsdColor;
  blue: InsdColor;
  yellow: InsdColor;
}

// colors object
interface Colors {
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

// variables object
interface Variables {
  radius: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
}

export interface Theme {
  colors: Colors;
  absolute: Absolute;
  variables: Variables;
  change: (mode: UserThemeMode) => void;
  mode: ThemeMode;
  system: boolean;
}
