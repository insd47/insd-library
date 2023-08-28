import styled from "@emotion/styled";
import { StyledBoxProps } from "./types";
import { Theme } from "@emotion/react";

const backgroundStyles = (theme: Theme) => ({
  bg: theme.colors.box.background,
  fg1: theme.colors.box.foreground[1],
  fg2: theme.colors.box.foreground[2],
  fg3: theme.colors.box.foreground[3],
});

const borderStyles = (theme: Theme) => ({
  1: theme.colors.box.border[1],
  2: theme.colors.box.border[2],
  3: theme.colors.box.border[3],
});

const radiusStyles = (theme: Theme) => ({
  1: 12,
  2: 10,
  3: 8,
  4: 6,
  5: 4,
});

const StyledBox = styled.div<StyledBoxProps>`
  box-sizing: border-box;
  border: 1px solid transparent;

  ${({
    background,
    customBackground,
    border,
    customBorder,
    radius,
    customRadius,
    theme,
  }) => ({
    backgroundColor:
      customBackground ??
      backgroundStyles(theme)[background] + "" ??
      "transparent",
    borderColor:
      customBorder ?? borderStyles(theme)[border] + "" ?? "transparent",
    borderRadius: customRadius ?? radiusStyles(theme)[radius] ?? "0",
  })}

  ${({ CSSValues }) => ({ ...CSSValues })}
`;

export default StyledBox;
