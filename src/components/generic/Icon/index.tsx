"use client";

import React, { PropsWithChildren, forwardRef } from "react";

import { StyledIcon, StyledIconButton } from "./styles";
import type { IconProps } from "./types";

import { usePointerEvents } from "../../../tools";
import "./main.css";

const Icon = forwardRef<HTMLSpanElement, PropsWithChildren<IconProps>>(
  (
    {
      children,
      type = "link",
      pressable,
      action,
      size = 24,
      margin,
      padding,
      right,
      disabled,
      ...props
    },
    ref
  ) => {
    const CSSValues = {
      fontSize: size,
      margin,
      padding,
      marginRight: right,
    };

    const { pointerEvents, pointerValues } = usePointerEvents();

    return pressable ? (
      <StyledIconButton
        {...pointerEvents}
        {...pointerValues}
        onClick={action ? () => action() : undefined}
      >
        <StyledIcon ref={ref} CSSValues={CSSValues} {...props}>
          {type}
        </StyledIcon>
      </StyledIconButton>
    ) : (
      <StyledIcon ref={ref} CSSValues={CSSValues} {...props}>
        {type}
      </StyledIcon>
    );
  }
);

export default Icon;
