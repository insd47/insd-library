"use client";

import React, { forwardRef, useEffect, useState, useRef } from "react";

import { usePointerEvents } from "../../../tools";

import StyledBoolean from "./styles";
import Icon from "./icon";
import type { BooleanProps } from "./types";

const Boolean = forwardRef<HTMLLabelElement, BooleanProps>(
  (
    {
      type = "checkbox",
      checked,
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

    const [isChecked, setIsChecked] = useState<boolean>(checked ?? false);
    const checkboxRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      setIsChecked(checked ?? false);
    }, [checked]);

    return (
      <StyledBoolean
        ref={ref}
        CSSValues={CSSValues}
        type={type}
        checked={isChecked}
        reverse={labelDirection === "left"}
        className={className}
        style={style}
        {...pointerEvents}
        {...pointerValues}
      >
        <input
          ref={checkboxRef}
          type={type}
          checked={isChecked}
          onChange={
            props.onChange ??
            function (e) {
              setIsChecked(e.target.checked);
            }
          }
          {...props}
        />
        <div>{type === "checkbox" ? <Icon /> : <div />}</div>
        {label && <span>{label}</span>}
      </StyledBoolean>
    );
  }
);

export default Boolean;
