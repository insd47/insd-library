import styled from "@emotion/styled";

import { StyledPressableProps } from "./types";

const StyledPressable = styled.button<StyledPressableProps>`
  border: 0;
  background-color: transparent;
  padding: 0;
  outline: 0;
  font-size: inherit;
  cursor: pointer;
  position: relative;
  transition: transform 0.1s;
  text-decoration: none;
  ${({ hasLink, theme }) =>
    hasLink ? `color: ${theme.colors.blue.main};` : "color: inherit;"}

  &:after {
    content: "";
    position: absolute;
    width: ${({ uniform }) =>
      uniform ? "calc(100% + 6px)" : "calc(100% + 12px)"};
    height: calc(100% + 6px);
    left: ${({ uniform }) => (uniform ? "-3px" : "-6px")};
    top: -3px;
    background-color: transparent;
    pointer-events: none;
    transition: background-color 0.1s;
    border-radius: 6px;
    z-index: -1;
  }

  ${({ isHover, isClicked }) =>
    isHover && isClicked && "transform: scale(0.98);"}

  ${({ theme, hasLink, isHover, isClicked }) =>
    hasLink
      ? isHover
        ? isClicked
          ? `
      text-decoration: underline;
      &:after {
        background-color: ${theme.colors.blue.alpha(35)};
      }
        `
          : `
        text-decoration: underline;
        &:after {
          background-color: ${theme.colors.blue.alpha(20)};
        }
        `
        : ""
      : isHover
      ? isClicked
        ? `
        &:after {
          background-color: ${theme.colors.gray.alpha(35)};
        }
        `
        : `
        &:after {
          background-color: ${theme.colors.gray.alpha(20)};
        }
        `
      : ""}

  &[disabled] {
    ${({ theme }) => `
    color: ${theme.colors.gray.alpha(50)} !important;
    pointer-events: none;
    `}
  }

  &:focus-visible {
    outline: 1px dashed ${({ theme }) => theme.colors.gray.main};
    outline-offset: 4px;
  }

  ${({ CSSValues }) => ({ ...CSSValues })}
`;

export default StyledPressable;
