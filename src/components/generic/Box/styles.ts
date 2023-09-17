import styled from "@emotion/styled";
import { StyledBoxProps } from "./types";

const StyledBox = styled.div<StyledBoxProps>`
  box-sizing: border-box;
  border: 1px solid transparent;

  ${({ theme, background }) => {
    const backgroundStyles = {
      bg: theme.colors.box.background + "",
      fg1: theme.colors.box.foreground[1] + "",
      fg2: theme.colors.box.foreground[2] + "",
      fg3: theme.colors.box.foreground[3] + "",
    };

    return background && `background-color: ${backgroundStyles[background]};`;
  }}

  ${({ theme, border }) => {
    const borderStyles = {
      1: "1px solid " + theme.colors.box.border[1],
      2: "1px solid " + theme.colors.box.border[2],
      3: "1px solid " + theme.colors.box.border[3],
    };

    if (typeof border === "number") return `border: ${borderStyles[border]};`;

    return (
      border && {
        borderTop: border.top && borderStyles[border.top],
        borderRight: border.right && borderStyles[border.right],
        borderBottom: border.bottom && borderStyles[border.bottom],
        borderLeft: border.left && borderStyles[border.left],
      }
    );
  }}

  ${({ theme, radius }) => {
    const radiusStyles = {
      1: theme.variables.radius[1],
      2: theme.variables.radius[2],
      3: theme.variables.radius[3],
      4: theme.variables.radius[4],
      5: theme.variables.radius[5],
    };

    if (typeof radius === "number")
      return `border-radius: ${radiusStyles[radius]};`;

    return (
      radius && {
        borderTopLeftRadius: radius.topLeft && radiusStyles[radius.topLeft],
        borderTopRightRadius: radius.topRight && radiusStyles[radius.topRight],
        borderBottomLeftRadius:
          radius.bottomLeft && radiusStyles[radius.bottomLeft],
        borderBottomRightRadius:
          radius.bottomRight && radiusStyles[radius.bottomRight],
      }
    );
  }}}

  ${({ CSSValues }) => ({ ...CSSValues })}
`;

export default StyledBox;
