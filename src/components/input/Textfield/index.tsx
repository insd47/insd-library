"use client";

import React, { forwardRef } from "react";

import {
  StyledTextfield,
  StyledTextfieldContainer,
  StyledTextfieldLabel,
} from "./styles";

import { TextfieldProps } from "./types";
import { usePointerEvents } from "../../../tools";
import { Icon } from "../../generic";

const Textfield = forwardRef<HTMLInputElement, TextfieldProps>(
  (
    {
      disabled,
      size = "medium",
      margin,
      bottom,
      stretch,
      icon,
      rightIconButton,
      rightIconAction,
      label,
      assistive,
      error,
      placeholder,
      type,
      value,
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
      <StyledTextfieldContainer
        className={className}
        style={style}
        stretch={stretch}
      >
        {label && <StyledTextfieldLabel>{label}</StyledTextfieldLabel>}
        <StyledTextfield
          ref={ref}
          CSSValues={CSSValues}
          disabled={disabled}
          error={error !== undefined}
          size={size}
          rightIconButton={rightIconButton !== undefined}
          {...pointerEvents}
          {...pointerValues}
        >
          {icon && <Icon size={16} type={icon} />}
          <input
            type={type}
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            {...props}
          />
          {rightIconButton && (
            <Icon
              size={16}
              buttonSize={size === "medium" ? 32 : 24}
              type={rightIconButton}
              style={{
                marginRight: "-3px",
              }}
              action={rightIconAction}
              pressable
            />
          )}
        </StyledTextfield>
        {(assistive || error) && (
          <StyledTextfieldLabel error={error !== undefined}>
            {error || assistive}
          </StyledTextfieldLabel>
        )}
      </StyledTextfieldContainer>
    );
  }
);

export default Textfield;
