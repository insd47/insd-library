"use client";

import React, { PropsWithChildren, forwardRef } from "react";

import { StyledIcon, StyledIconButton } from "./styles";
import IconType from "./fonts/types";
import type { IconProps } from "./types";

import { usePointerEvents } from "../../../tools";

const Icon = forwardRef<HTMLSpanElement, PropsWithChildren<IconProps>>(
  (
    {
      children,
      type = IconType.EMPTY,
      pressable,
      size = 24,
      buttonSize,
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
        disabled={disabled}
        size={buttonSize ?? Math.floor(size * 1.5)}
      >
        <StyledIcon ref={ref} size={size} CSSValues={CSSValues} {...props}>
          {type}
        </StyledIcon>
      </StyledIconButton>
    ) : (
      <StyledIcon size={size} ref={ref} CSSValues={CSSValues} {...props}>
        {type}
      </StyledIcon>
    );
  }
);

export default Icon;
