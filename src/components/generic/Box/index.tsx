"use client";

import React, { forwardRef } from "react";

import StyledBox from "./styles";
import type { BoxProps } from "./types";

const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ margin, padding, children, ...props }, ref) => {
    const CSSValues = {
      margin,
      padding,
    };

    return (
      <StyledBox ref={ref} CSSValues={CSSValues} {...props}>
        {children}
      </StyledBox>
    );
  }
);

export default Box;
