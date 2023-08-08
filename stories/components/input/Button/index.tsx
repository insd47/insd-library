import { PropsWithChildren, forwardRef, useState, useEffect } from "react";

import StyledButton from "./styles";

import { Icon, Loading } from "../../generic";
import { usePointerEvents } from "../../../../tools";
import { ButtonProps } from "./types";

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  (
    {
      loading,
      children,
      icon,
      stretch,
      type = "linear",
      size = "medium",
      action,
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
          ? "15px 26px"
          : size === "medium"
          ? "11px 17px"
          : size === "small"
          ? "7px 11px"
          : "4px 7px",
      fontSize: size !== "tiny" ? 14 : 12,
      marginBottom: bottom,
    };

    const [hasLoading, setHasLoading] = useState<boolean>(
      typeof loading === "boolean" ? loading : false
    );

    const { pointerEvents, pointerValues } = usePointerEvents();

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
        onClick={action ? () => action() : undefined}
        {...pointerEvents}
        {...pointerValues}
        {...props}
      >
        {icon && (
          <Icon
            type={icon}
            right={size === "tiny" ? 3 : 4}
            size={size === "tiny" ? 16 : 18}
          />
        )}
        <span>{children}</span>
        {hasLoading && (
          <Loading
            size="small"
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
