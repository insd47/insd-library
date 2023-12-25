import styled from "@emotion/styled";
import type { CSSProperties } from "react";

const StyledSwitch = styled.div<{
  size?: "small" | "medium" | "big";
  disabled?: boolean;
  isEnabled?: boolean;
  onChange?: () => void;
  isHover?: boolean;
}>`
  display: inline-flex;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.box.border[2] + ""};
  background-color: ${({ theme }) => theme.colors.box.background + ""};
  transition: background-color 0.1s, border-color 0.1s;

  &:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.text.main + ""};
    transition: background-color 0.1s, transform 0.2s;

    ${({ isEnabled, theme, size }) =>
    isEnabled && `background-color: ${theme.colors.box.background};
                 transform: translateX(calc(100% + ${size === "small" ? "3px" : size === "medium" ? "4px" : "5px"}));`}

    ${({ size }) =>
      size === "small"
        ? `width: 12px; height: 12px;
           top: 2px; left: 2px;`
        : size === "medium"
        ? `width: 16px; height: 16px;
             top: 3px; left: 3px;`
        : `width: 18px; height: 18px;
               top: 4px; left: 4px;`}
  }

  ${({ disabled }) =>
    disabled &&
    `cursor: not-allowed;
    opacity: 0.5;`}

  ${({ disabled, isHover, theme }) =>
    !disabled && isHover && `border-color: ${theme.colors.text.passive[2]};`}

  ${({ isEnabled, theme }) =>
    isEnabled &&
    `border-color: ${theme.colors.text.main};
     background-color: ${theme.colors.text.main};`}

  ${({ size }) =>
    size === "small"
      ? `width: 32px;
         height: 18px;
         border-radius: 9px;`
      : size === "medium"
      ? `width: 44px;
         height: 24px;
         border-radius: 12px;`
      : `width: 53px;
         height: 28px;
         border-radius: 14px;`}
`;

export default StyledSwitch;