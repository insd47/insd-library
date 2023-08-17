import styled from "@emotion/styled";
import { StyledLoadingProps } from "./types";

const StyledLoading = styled.span<StyledLoadingProps>`
  display: inline-flex;

  ${({ theme }) => `@keyframes LoadingAnimation {
    0% {
      background-color: ${theme.colors.text.passive[3]};
    }
    50% {
      background-color: ${theme.colors.text.passive[1]};
    }
    100% {
      background-color: ${theme.colors.text.passive[3]};
    }
  }`}

  & span:nth-of-type(4) {
    display: none;
  }

  & span {
    border-radius: 50%;
    animation-delay: 200ms;
    ${({ theme }) => `
      background-color: ${theme.colors.text.passive[3]};
      animation: LoadingAnimation 1.4s ease-in-out infinite;
    `};
  }

  & span:nth-of-type(2) {
    animation-delay: 400ms;
  }

  & span:nth-of-type(3) {
    animation-delay: 600ms;
  }

  ${({ size }) =>
    size === "big"
      ? `
    column-gap: 8px;
    & span {
      width: 16px; height: 16px;
    }
  `
      : size === "medium"
      ? `
    column-gap: 6px;
    & span {
      width: 12px; height: 12px;
    }
  `
      : `
    column-gap: 4px;
    & span {
      width: 8px; height: 8px;
    }
  `}

  ${({ CSSValues }) => ({ ...CSSValues })}
`;

export default StyledLoading;
