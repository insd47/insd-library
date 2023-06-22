import styled from "@emotion/styled";
import { StyledButtonProps } from "./types";

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  outline: 0;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color 0.1s, border-color 0.1s, color 0.1s,
    transform 0.1s;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: 400;

  &[disabled] {
    cursor: not-allowed;
    ${({ theme }) => `
    border: 1px dashed ${theme.colors.gray.solid(50)};
    color: ${theme.colors.gray.solid(70)};
    background-color: ${theme.colors.background.main};
    pointer-events: none;
    `}
  }

  & > * {
    opacity: 1;
    transition: opacity 0.1s;
    will-change: var(--willchangedefault), opacity;
    ${({ isLoading }) =>
      isLoading &&
      `
      opacity: 0;
    `}
  }

  ${({ isHover, isClicked }) =>
    isHover && isClicked && "transform: scale(0.98);"}

  ${({ buttonType, theme, isHover, isClicked }) =>
    buttonType === "filled"
      ? `
    border-color: transparent;
    background-color: ${theme.colors.text.main};
    color: ${theme.colors.background.main};

    ${
      isHover
        ? isClicked
          ? `
    background-color: ${theme.colors.text.solid(65)};
    `
          : `
    background-color: ${theme.colors.text.solid(80)};
    `
        : ""
    }
    `
      : buttonType === "linear"
      ? `
    border-color: ${theme.colors.text.main};
    background-color: ${theme.colors.background.main};
    color: ${theme.colors.text.main};

    ${
      isHover
        ? isClicked
          ? `
    background-color: ${theme.colors.text.solid(10)};
    border-color: ${theme.colors.gray.solid(70)};
    `
          : `
    border-color: ${theme.colors.gray.solid(70)};
    `
        : ""
    }
    `
      : buttonType === "warn"
      ? `
    border-color: transparent;
    color: ${theme.colors.white.main};
    background-color: ${theme.colors.red.main};

    ${
      isHover
        ? isClicked
          ? `
    background-color: ${theme.colors.red.solid(65)};
    `
          : `
    background-color: ${theme.colors.red.solid(80)};
    `
        : ""
    }
  `
      : `
  border: 0;
  background-color: transparent;
  color: ${theme.colors.text.main};

  ${
    isHover
      ? isClicked
        ? `
  background-color: ${theme.colors.gray.solid(35)};
  `
        : `
  background-color: ${theme.colors.gray.solid(20)};
  `
      : ""
  }
      `}

  ${({ CSSValues }) => ({ ...CSSValues })}
`;

export default StyledButton;
