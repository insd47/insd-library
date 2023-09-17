"use client";

import React, { PropsWithChildren, forwardRef } from "react";

import StyledBox from "./styles";
import type { BoxProps } from "./types";

const Box = forwardRef<HTMLDivElement, PropsWithChildren<BoxProps>>(
  (
    {
      margin,
      padding,
      children,
      background = "fg2",
      overflow = "hidden",
      border = 2,
      radius = 2,
      ...props
    },
    ref
  ) => {
    const CSSValues = {
      margin,
      padding,
      overflow,
    };

    return (
      <StyledBox
        ref={ref}
        CSSValues={CSSValues}
        background={background}
        border={border}
        radius={radius}
        {...props}
      >
        {children}
      </StyledBox>
    );
  }
);

export default Box;
