import styled from "@emotion/styled";
import { StyledButtonProps, ButtonType } from "./types";

const getPointerType = (isHover?: boolean, isPressed?: boolean) =>
  isHover ? (isPressed ? "pressed" : "hover") : "default";

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  outline: 0;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: opacity 0.2s, background-color 0.1s, color 0.1s, border-color 0.1s, opacity 0.1s, transform 0.1s;
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
    opacity: ${({ theme, buttonType }) =>
      theme.mode === "light" && buttonType === "filled" ? 0.2 : 0.5};
    cursor: not-allowed;
    transform: none !important;
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
    ({
      default: "",
      hover: "",
      pressed: "transform: scale(0.98);",
    }[getPointerType(isHover, isPressed)])}
  
  ${({ buttonType, isHover, isPressed, theme, disabled }) =>
    ({
      filled:
        `border-color: transparent;
        background-color: ${theme.colors.text.main};
        color: ${theme.colors.box.background};` +
        (!disabled
          ? {
              default: "",
              hover: `background-color: ${theme.colors.text.main.alpha(80)};`,
              pressed: `background-color: ${theme.colors.text.main.alpha(60)};`,
            }[getPointerType(isHover, isPressed)]
          : ""),

      linear:
        `border-color: ${theme.colors.box.border[1]};
        background-color: ${theme.colors.box.foreground[3]};
        color: ${theme.colors.text.main};` +
        (!disabled
          ? {
              default: "",
              hover: `border-color: ${theme.colors.text.passive[2]};`,
              pressed: `color: ${theme.colors.text.passive[2]}; 
            border-color: ${theme.colors.box.border[2]};`,
            }[getPointerType(isHover, isPressed)]
          : ""),

      warn:
        `border-color: transparent;
        color: white;
        background-color: ${theme.colors.secondary.red};` +
        (!disabled
          ? {
              default: "",
              hover: `background-color: ${theme.colors.secondary.red.alpha(
                80
              )};`,
              pressed: `background-color: ${theme.colors.secondary.red.alpha(
                60
              )};`,
            }[getPointerType(isHover, isPressed)]
          : ""),

      transparent:
        `border-color: transparent;
        color: ${theme.colors.text.main};
        background-color: transparent;` +
        (!disabled
          ? {
              default: "",
              hover: `background-color: ${theme.colors.box.filled[2]};`,
              pressed: `background-color: ${theme.colors.box.filled[3]};
            color: ${theme.colors.text.passive[2]};`,
            }[getPointerType(isHover, isPressed)]
          : ""),
    }[buttonType as ButtonType])}

  ${({ CSSValues }) => ({ ...CSSValues })})}
`;

export default StyledButton;
