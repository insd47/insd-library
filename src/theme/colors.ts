import { CSSColor } from "./types";

export class InsdColor {
  private r: number;
  private g: number;
  private b: number;
  private theme: "light" | "dark";

  private _alpha?: number;
  private _elevation?: number;

  constructor(
    r: number,
    g: number,
    b: number,
    theme: "light" | "dark",
    options?: { alpha?: number; elevation?: number }
  ) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.theme = theme;

    this._alpha = options?.alpha;
    this._elevation = options?.elevation;
  }

  public alpha(alpha: number): InsdColor {
    return new InsdColor(this.r, this.g, this.b, this.theme, {
      alpha,
    });
  }

  public elevation(elevation: number): InsdColor {
    return new InsdColor(this.r, this.g, this.b, this.theme, {
      elevation,
    });
  }

  public toString = (): CSSColor => {
    if (this._elevation !== undefined) {
      switch (this.theme) {
        case "light":
          return getLightElevation(
            this.r,
            this.g,
            this.b,
            this._elevation,
            this._alpha
          );
        case "dark":
          return getDarkElevation(
            this.r,
            this.g,
            this.b,
            this._elevation,
            this._alpha
          );
      }
    }

    return this._alpha !== undefined
      ? `rgba(${this.r}, ${this.g}, ${this.b}, ${this._alpha / 100})`
      : `rgb(${this.r}, ${this.g}, ${this.b})`;
  };
}

const getLightElevation = (
  r: number,
  g: number,
  b: number,
  elevation: number,
  alpha?: number
) => {
  const getColor = (color: number) =>
    255 - Math.floor((255 - color) * (elevation / 100));

  return alpha !== undefined
    ? `rgba(${getColor(r)}, ${getColor(g)}, ${getColor(b)}, ${alpha / 100})`
    : `rgb(${getColor(r)}, ${getColor(g)}, ${getColor(b)})`;
};

const getDarkElevation = (
  r: number,
  g: number,
  b: number,
  elevation: number,
  alpha?: number
) => {
  const getColor = (color: number) => Math.floor(color * (elevation / 100));

  return alpha !== undefined
    ? `rgba(${getColor(r)}, ${getColor(g)}, ${getColor(b)}, ${alpha / 100})`
    : `rgb(${getColor(r)}, ${getColor(g)}, ${getColor(b)})`;
};

export const absolute = {
  light: {
    gray: new InsdColor(0, 0, 0, "light"),
    red: new InsdColor(252, 79, 79, "light"),
    green: new InsdColor(74, 216, 113, "light"),
    blue: new InsdColor(60, 137, 255, "light"),
    yellow: new InsdColor(255, 191, 68, "light"),
  },
  dark: {
    gray: new InsdColor(255, 255, 255, "dark"),
    red: new InsdColor(252, 79, 79, "dark"),
    green: new InsdColor(69, 199, 104, "dark"),
    blue: new InsdColor(60, 137, 255, "dark"),
    yellow: new InsdColor(255, 191, 68, "dark"),
  },
};

export const colors = {
  light: {
    text: {
      main: absolute.light.gray,
      passive: {
        1: absolute.light.gray.elevation(65),
        2: absolute.light.gray.elevation(50),
        3: absolute.light.gray.elevation(35),
      },
    },
    box: {
      background: absolute.light.gray.elevation(0),
      overlay: absolute.light.gray.alpha(65),
      foreground: {
        1: absolute.light.gray.elevation(8),
        2: absolute.light.gray.elevation(5),
        3: absolute.light.gray.elevation(2),
      },
      filled: {
        1: absolute.light.gray.alpha(8),
        2: absolute.light.gray.alpha(5),
        3: absolute.light.gray.alpha(2),
      },
      border: {
        1: absolute.light.gray.elevation(25),
        2: absolute.light.gray.elevation(20),
        3: absolute.light.gray.elevation(15),
      },
      shadow: {
        1: new InsdColor(0, 0, 0, "light", { alpha: 20 }),
        2: new InsdColor(0, 0, 0, "light", { alpha: 8 }),
      },
    },
    secondary: {
      red: absolute.light.red,
      green: absolute.light.green,
      blue: absolute.light.blue,
      yellow: absolute.light.yellow,
    },
  },
  dark: {
    text: {
      main: absolute.dark.gray,
      passive: {
        1: absolute.dark.gray.elevation(65),
        2: absolute.dark.gray.elevation(50),
        3: absolute.dark.gray.elevation(35),
      },
    },
    box: {
      background: absolute.dark.gray.elevation(0),
      overlay: absolute.dark.gray.alpha(65),
      foreground: {
        1: absolute.dark.gray.elevation(8),
        2: absolute.dark.gray.elevation(5),
        3: absolute.dark.gray.elevation(2),
      },
      filled: {
        1: absolute.dark.gray.alpha(8),
        2: absolute.dark.gray.alpha(5),
        3: absolute.dark.gray.alpha(2),
      },
      border: {
        1: absolute.dark.gray.elevation(25),
        2: absolute.dark.gray.elevation(20),
        3: absolute.dark.gray.elevation(15),
      },
      shadow: {
        1: new InsdColor(0, 0, 0, "dark", { alpha: 60 }),
        2: new InsdColor(0, 0, 0, "dark", { alpha: 30 }),
      },
    },
    secondary: {
      red: absolute.dark.red,
      green: absolute.dark.green,
      blue: absolute.dark.blue,
      yellow: absolute.dark.yellow,
    },
  },
};
