"use client";

import React, {
  PropsWithChildren,
  forwardRef,
  useState,
  useEffect,
} from "react";

import StyledButton from "./styles";
import type { ButtonProps } from "./types";

import { usePointerEvents } from "../../../tools";
import { useTheme } from "@emotion/react";
import { InsdColor } from "../../../theme/colors";

import Icon from "../../common/icon";
import Loading from "../../common/loading";

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  (
    {
      loading,
      children,
      icon,
      stretch,
      type = "linear",
      size = "medium",
      formType = "button",
      margin,
      bottom,
      disabled,
      ...props
    }: ButtonProps,
    ref
  ) => {
    const CSSValues = {
      margin,
      width: stretch ? "100%" : undefined,
      padding:
        size === "big"
          ? children
            ? "15px 26px"
            : "15px 15px"
          : size === "medium"
          ? children
            ? "11px 17px"
            : "11px 11px"
          : size === "small"
          ? children
            ? "7px 11px"
            : "7px 7px"
          : children
          ? "4px 7px"
          : "4px 4px",
      fontSize: size !== "tiny" ? 14 : 12,
      marginBottom: bottom,
    };

    const [hasLoading, setHasLoading] = useState<boolean>(
      typeof loading === "boolean" ? loading : false
    );

    const { pointerEvents, pointerValues } = usePointerEvents();
    const { colors } = useTheme();

    useEffect(() => {
      if (loading === false) {
        setTimeout(() => setHasLoading(false), 200);
      } else if (loading === true) {
        setHasLoading(true);
      }
    }, [loading]);

    return (
      <StyledButton
        type={formType}
        buttonType={type}
        ref={ref}
        disabled={disabled || loading}
        isLoading={loading}
        CSSValues={CSSValues}
        {...pointerEvents}
        {...pointerValues}
        {...props}
      >
        {icon && (
          <Icon
            type={icon}
            right={children ? (size === "tiny" ? 3 : 4) : 0}
            size={size === "tiny" ? 16 : 18}
          />
        )}
        <span>{children}</span>
        {hasLoading && (
          <Loading
            size="small"
            type={
              type === "filled"
                ? "reverse"
                : type === "warn"
                ? "white"
                : "default"
            }
            style={{
              opacity: loading ? 1 : 0,
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </StyledButton>
    );
  }
);

export default Button;
