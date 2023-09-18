"use client";

import React, { PropsWithChildren, forwardRef } from "react";

import { usePointerEvents } from "../../../tools";

import StyledBoolean from "./styles";
import Icon from "./icon";
import type { BooleanProps } from "./types";

const Boolean = forwardRef<HTMLLabelElement, PropsWithChildren<BooleanProps>>(
  (
    {
      type = "checkbox",
      margin,
      bottom,
      disabled,
      labelDirection = "right",
      className,
      style,
      children,
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
        disabled={disabled}
        style={style}
        {...pointerEvents}
        {...pointerValues}
      >
        <input disabled={disabled} type={type} {...props} />
        <div>{type === "checkbox" ? <Icon /> : <div />}</div>
        {children}
      </StyledBoolean>
    );
  }
);

export default Boolean;
