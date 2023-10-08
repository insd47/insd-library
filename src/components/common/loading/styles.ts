import styled from "@emotion/styled";
import { StyledLoadingProps } from "./types";

const StyledLoading = styled.span<StyledLoadingProps>`
  display: inline-flex;

  @keyframes LoadingAnimation {
    0% {
      background-color: var(--loading-dark);
    }
    50% {
      background-color: var(--loading-light);
    }
    100% {
      background-color: var(--loading-dark);
    }
  }

  & > span {
    background-color: var(--loading-dark);
  }

  & span:nth-of-type(4) {
    display: none;
  }

  & span {
    border-radius: 50%;
    animation-delay: 100ms;
    animation: LoadingAnimation 1.2s ease-in-out infinite;
  }

  & span:nth-of-type(2) {
    animation-delay: 200ms;
  }

  & span:nth-of-type(3) {
    animation-delay: 300ms;
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
