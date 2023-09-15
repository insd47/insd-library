import styled from "@emotion/styled";
import type { CSSProperties } from "react";

const StyledBoolean = styled.label<{
  type: "checkbox" | "radio";
  reverse?: boolean;
  checked?: boolean;
  CSSValues?: CSSProperties;
  isHover?: boolean;
  isPressed?: boolean;
}>`
  display: inline-flex;
  cursor: pointer;
  column-gap: 8px;
  align-items: center;
  font-size: 14px;
  line-height: 18px;
  font-family: var(--font-main), sans-serif;

  ${({ reverse }) => (reverse ? "flex-direction: row-reverse;" : "")}

  &[disabled] {
    cursor: not-allowed;
  }

  & > input {
    display: none;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    overflow: hidden;
    position: relative;
    border-radius: ${({ type }) => (type === "checkbox" ? "4px" : "50%")};

    border: 1px solid ${({ theme }) => theme.colors.box.border[2] + ""};

    transition: border-color 0.1s, background-color 0.1s;

    & > svg path {
      fill: transparent;
      transition: fill 0.1s;
    }

    & > div {
      width: calc(100% - 6px);
      height: calc(100% - 6px);
      border-radius: 50%;
      transition: background-color 0.1s;
    }

    ${({ isHover, theme }) =>
      isHover &&
      `border-color: ${theme.colors.text.passive[2]};

        & > svg path {
          fill: ${theme.colors.text.passive[3]} !important;
        }

        & > div {
          background-color: ${theme.colors.text.passive[3]};
        }`}

    ${({ checked, theme, type }) =>
      checked &&
      (type === "checkbox"
        ? `background-color: ${theme.colors.text.main};
      border-color: transparent;
      
      & > svg path {
        fill: ${theme.colors.box.background} !important;
      }`
        : `border-color: ${theme.colors.text.passive[3]};

      & > div {
        background-color: ${theme.colors.text.main};
      }`)}

  ${({ CSSValues }) => ({ ...CSSValues })}
`;

export default StyledBoolean;
