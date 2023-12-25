"use client";

import React, { forwardRef, useEffect, useRef, useState } from "react";
import { usePointerEvents } from "../../../tools";

import { SwitchProps } from "./types";
import StyledSwitch from "./styles";

const Switch = forwardRef<HTMLDivElement, SwitchProps>(
  (
    {
      size = "small",
      disabled,
      checked,
      onChange,
      name,
      lValue = "off",
      rValue = "on",
      ...props
    },
    ref
  ) => {
    const { pointerEvents, pointerValues } = usePointerEvents();
    const [isEnabled, setIsEnabled] = useState<boolean>(false);

    const leftInputRef = useRef<HTMLInputElement>(null);
    const rightInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      setIsEnabled(checked ?? false);
    }, [checked])

    return (
      <StyledSwitch
        ref={ref}
        size={size}
        onClick={
          onChange ? () => onChange(!checked) : () => setIsEnabled(!isEnabled)
        }
        isEnabled={isEnabled}
        disabled={disabled}
        {...props}
        {...pointerEvents}
        {...pointerValues}
      >
        <input
          type="radio"
          ref={leftInputRef}
          name={name}
          value={lValue}
          checked={!isEnabled}
        />
        <input
          type="radio"
          ref={rightInputRef}
          name={name}
          value={rValue}
          checked={isEnabled}
        />
      </StyledSwitch>
    );
  }
);

export default Switch;
