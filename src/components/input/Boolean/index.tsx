"use client";

import React, { forwardRef } from "react";

import { usePointerEvents } from "../../../tools";

import StyledBoolean from "./styles";
import Icon from "./icon";
import type { BooleanProps } from "./types";

const Boolean = forwardRef<HTMLLabelElement, BooleanProps>(
  (
    {
      type = "checkbox",
      margin,
      bottom,
      disabled,
      label,
      labelDirection = "right",
      className,
      style,
      ...props
    },
    ref
  ) => {
    const CSSValues = {
      margin,
      marginBottom: bottom,
    };

    const { pointerEvents, pointerValues } = usePointerEvents();

    return (
      <StyledBoolean
        ref={ref}
        CSSValues={CSSValues}
        type={type}
        reverse={labelDirection === "left"}
        className={className}
        style={style}
        {...pointerEvents}
        {...pointerValues}
      >
        <input type={type} {...props} />
        <div>{type === "checkbox" ? <Icon /> : <div />}</div>
        {label && <span>{label}</span>}
      </StyledBoolean>
    );
  }
);

export default Boolean;
