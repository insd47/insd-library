import styled from "@emotion/styled";
import { StyledIconProps, StyledIconButtonProps } from "./types";
import InsdIcons from "./fonts/glyphs.woff";

export const StyledIconButton = styled.button<StyledIconButtonProps>`
  padding: 0;
  background-color: transparent;
  color: inherit;
  border: 0;
  line-height: 1;
  cursor: pointer;
  border-radius: ${({ size }) => Math.floor(size / 4)}px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;
  background-color: transparent;
  transition: background-color 0.1s;

  ${({ theme, isHover, isPressed }) =>
    isHover &&
    {
      hover: `background-color: ${theme.colors.box.filled[2]} !important;`,
      pressed: `background-color: ${theme.colors.box.filled[1]};`,
    }[isPressed ? "pressed" : "hover"]}

  ${({ size }) => ({
    width: size,
    height: size,
  })}
`;

export const StyledIcon = styled.i<StyledIconProps>`
  @font-face {
    font-family: insdIcons;
    src: url(${InsdIcons}) format("truetype");
  }

  ${({ size }) => ({
    width: size,
    height: size,
  })}

  font-family: insdIcons;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  letter-spacing: 0;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga=1";
  -moz-font-feature-settings: "liga";
  -ms-font-feature-settings: "liga" 1;
  font-feature-settings: "liga";
  -webkit-font-variant-ligatures: discretionary-ligatures;
  font-variant-ligatures: discretionary-ligatures;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ${({ CSSValues }) => ({ ...CSSValues })}
`;
