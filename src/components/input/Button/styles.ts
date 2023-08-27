import styled from "@emotion/styled";
import { StyledButtonProps, ButtonType } from "./types";

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  outline: 0;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: opacity 0.1s, transform 0.1s;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: 400;
  font-family: var(--font-main), sans-serif;

  flex-shrink: 0;
  flex-grow: 0;

  &[disabled] {
    cursor: not-allowed;
    ${({ theme }) => `
    border: 1px dashed ${theme.colors.box.border[2]};
    color: ${theme.colors.text.passive[1]};
    background-color: ${theme.colors.box.foreground[3]};
    pointer-events: none;
    `}
  }

  & > * {
    opacity: 1;
    transition: opacity 0.1s;
    ${({ isLoading }) =>
      isLoading &&
      `
      opacity: 0;
    `}
  }

  ${({ isHover, isPressed }) =>
    isHover
      ? isPressed
        ? "transform: scale(0.98); opacity: 0.6;"
        : "opacity: 0.8;"
      : ""}
  
  ${({ buttonType, theme }) =>
    ({
      filled: `
        border-color: transparent;
        background-color: ${theme.colors.text.main};
        color: ${theme.colors.box.background};
      `,

      linear: `
        border-color: ${theme.colors.box.border[1]};
        background-color: ${theme.colors.box.foreground[3]};
        color: ${theme.colors.text.main};
      `,

      warn: `
        border-color: transparent;
        color: white;
        background-color: ${theme.colors.secondary.red};
      `,

      transparent: `
        border-color: transparent;
        color: ${theme.colors.text.main};
        background-color: transparent;
      `,
    }[buttonType as ButtonType])}

  ${({ CSSValues }) => ({ ...CSSValues })})}
`;

export default StyledButton;
