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
      <StyledTextfieldContainer stretch={stretch}>
        {label && <StyledTextfieldLabel>{label}</StyledTextfieldLabel>}
        <StyledTextfield
          ref={ref}
          CSSValues={CSSValues}
          disabled={disabled}
          error={error !== undefined}
          {...pointerEvents}
          {...pointerValues}
        >
          {icon && <Icon size={18} type={icon} />}
          <input
            type={type}
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            {...props}
          />
          {rightIconButton && (
            <Icon
              size={18}
              type={rightIconButton}
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
