import styled from "@emotion/styled";

import type { StyledTooltipProps } from "./types";

const MIN_PADDING = 10;

const distance = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left",
};

export const StyledTooltip = styled.span<StyledTooltipProps>`
  ${({ isVisible, isHoverable }) =>
    isVisible && isHoverable ? "pointer-events: auto;" : ""}

  ${({ boundary, limits }) =>
    Object.fromEntries(
      Object.entries(boundary).map(([key, value]) => {
        const direction = key === "top" || key === "bottom" ? "y" : "x";
        const corrected = `min(${limits[direction]}px, ${value}px)`;

        return [key, corrected];
      })
    )}

  max-width: ${({ maxWidth }) => {
    const max = `calc(100% - ${MIN_PADDING * 2}px)`;

    if (maxWidth) {
      return `min(${maxWidth}px, ${max})`;
    }

    return max;
  }};

  position: absolute;
  padding-${({ position }) => distance[position]}: ${MIN_PADDING}px;

  & > div {
    padding: 8px 12px;
    border-radius: ${({ theme }) => theme.variables.radius[3]};
    background-color: ${({ theme }) => theme.colors.box.foreground[1] + ""};
    border: 1px solid ${({ theme }) => theme.colors.box.border[1] + ""};
    color: ${({ theme }) => theme.colors.text.main + ""};
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;

    ${({ isVisible, position }) => {
      const translate = {
        top: "translateY(100%)",
        bottom: "translateY(-100%)",
        left: "translateX(100%)",
        right: "translateX(-100%)",
      };

      return isVisible
        ? {
            opacity: 1,
            transitionProperty: "opacity, transform",
            transitionDuration: "0.2s",
            transitionTimingFunction: "cubic-bezier(.17,.67,.3,1)",
          }
        : {
            opacity: 0,
            transform: translate[position] + " scale(0.75)",
            transitionProperty: "opacity, transform",
            transitionDuration: "0.15s",
            transitionTimingFunction: "cubic-bezier(.24,0,.29,1)",
          };
    }}
  }
`;
