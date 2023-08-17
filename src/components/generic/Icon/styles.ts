import styled from "@emotion/styled";
import { StyledIconProps, StyledIconButtonProps } from "./types";

export const StyledIconButton = styled.button<StyledIconButtonProps>`
  padding: 0;
  background-color: transparent;
  color: inherit;
  border: 0;
  line-height: 1;
  cursor: pointer;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 150%;
    height: 150%;
    left: -25%;
    top: -25%;
    background-color: transparent;
    pointer-events: none;
    transition: background-color 0.1s;
    border-radius: 50%;
    z-index: -1;
  }

  ${({ theme, isHover, isPressed }) =>
    isHover &&
    {
      hover: `
        &:after {
          background-color: ${theme.colors.box.foreground[3]} !important;
        }`,
      pressed: `
        &:after {
          background-color: ${theme.colors.box.foreground[1]};
        }`,
    }[isPressed ? "pressed" : "hover"]}
`;

export const StyledIcon = styled.i<StyledIconProps>`
  font-family: var(--font-icon);
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
