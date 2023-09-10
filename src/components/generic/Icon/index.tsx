"use client";

import React, { PropsWithChildren, forwardRef } from "react";

import { StyledIcon, StyledIconButton } from "./styles";
import iconTypes from "./fonts/types";
import type { IconProps } from "./types";

import { usePointerEvents } from "../../../tools";

const Icon = forwardRef<HTMLSpanElement, PropsWithChildren<IconProps>>(
  (
    {
      children,
      type = "link",
      pressable,
      action,
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
        size={buttonSize ?? Math.floor(size * 1.5)}
        onClick={action ? () => action() : undefined}
      >
        <StyledIcon ref={ref} size={size} CSSValues={CSSValues} {...props}>
          {iconTypes[type]}
        </StyledIcon>
      </StyledIconButton>
    ) : (
      <StyledIcon size={size} ref={ref} CSSValues={CSSValues} {...props}>
        {iconTypes[type]}
      </StyledIcon>
    );
  }
);

export default Icon;
