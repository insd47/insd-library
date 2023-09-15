"use client";

import React, { PropsWithChildren, forwardRef } from "react";

import StyledBox from "./styles";
import type { BoxProps } from "./types";
import { useTheme } from "@emotion/react";

const Box = forwardRef<HTMLDivElement, PropsWithChildren<BoxProps>>(
  (
    {
      margin,
      padding,
      children,
      background = "fg2",
      overflow = "hidden",
      customBackground,
      border = 2,
      customBorder,
      radius = 2,
      customRadius,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    const CSSValues = {
      margin,
      padding,
      overflow,
    };

    const backgroundStyles = {
      bg: theme.colors.box.background,
      fg1: theme.colors.box.foreground[1],
      fg2: theme.colors.box.foreground[2],
      fg3: theme.colors.box.foreground[3],
    };

    const borderStyles = {
      1: theme.colors.box.border[1],
      2: theme.colors.box.border[2],
      3: theme.colors.box.border[3],
    };

    const radiusStyles = {
      1: 12,
      2: 10,
      3: 8,
      4: 6,
      5: 4,
    };

    return (
      <StyledBox
        ref={ref}
        CSSValues={CSSValues}
        background={customBackground ?? backgroundStyles[background] + ""}
        border={customBorder ?? borderStyles[border] + ""}
        radius={customRadius ?? radiusStyles[radius]}
        {...props}
      >
        {children}
      </StyledBox>
    );
  }
);

export default Box;
