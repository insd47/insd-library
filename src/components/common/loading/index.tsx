"use client";

import React, { CSSProperties, forwardRef } from "react";

import StyledLoading from "./styles";
import type { LoadingProps } from "./types";
import { useTheme } from "@emotion/react";

const Loading = forwardRef<HTMLSpanElement, LoadingProps>(
  ({ size = "medium", margin, padding, style, type, ...props }, ref) => {
    const CSSValues = {
      margin,
      padding,
    };

    const { colors } = useTheme();

    return (
      <StyledLoading
        ref={ref}
        size={size}
        CSSValues={CSSValues}
        style={
          {
            ...style,
            "--loading-dark": {
              default: colors.text.main.elevation(30),
              reverse: colors.text.main.elevation(70),
              white: "rgba(255, 255, 255, 0.3)",
            }[type ?? "default"],
            "--loading-light": {
              default: colors.text.main.elevation(70),
              reverse: colors.text.main.elevation(30),
              white: "rgba(255, 255, 255, 0.7)",
            }[type ?? "default"],
          } as CSSProperties
        }
        type={type}
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
