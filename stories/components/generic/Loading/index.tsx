import styled from "@emotion/styled";
import { CSSProperties, forwardRef, HTMLAttributes } from "react";

type LoadingSize = "big" | "medium" | "small";

interface CommonProps extends HTMLAttributes<HTMLSpanElement> {
  size?: LoadingSize;
}

interface LoadingProps extends CommonProps {
  flex?: CSSProperties["flex"];
  self?: CSSProperties["alignSelf"];
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  style?: CSSProperties;
}

interface StyledLoadingProps extends CommonProps {
  CSSValues?: CSSProperties;
}

const StyledLoading = styled.span<StyledLoadingProps>`
  display: inline-flex;

  ${({ theme }) => `@keyframes LoadingAnimation {
    0% {
      background-color: ${theme.colors.gray.alpha(30)};
    }
    50% {
      background-color: ${theme.colors.gray.main};
    }
    100% {
      background-color: ${theme.colors.gray.alpha(30)};
    }
  }`}

  & span:nth-of-type(4) {
    display: none;
  }

  & span {
    border-radius: 50%;
    animation-delay: 200ms;
    ${({ theme }) => `
      background-color: ${theme.colors.gray.alpha(30)};
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

const Loading = forwardRef<HTMLSpanElement, LoadingProps>(
  ({ size = "medium", flex, self, margin, padding, style, ...props }, ref) => {
    const CSSValues = {
      flex,
      self,
      margin,
      padding,
    };

    return (
      <StyledLoading
        ref={ref}
        size={size}
        CSSValues={CSSValues}
        style={style}
        {...props}
      >
        <span />
        <span />
        <span />
        <span>Loading...</span>
      </StyledLoading>
    );
  }
);

export default Loading;
