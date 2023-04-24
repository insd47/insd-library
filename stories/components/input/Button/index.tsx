import styled from "@emotion/styled";
import {
  CSSProperties,
  PropsWithChildren,
  forwardRef,
  HTMLAttributes,
  useState,
  useEffect,
} from "react";

import { Icon, Loading } from "../../generic";
import { IconType } from "../../generic/Icon/types";
import { usePointerEvents } from "../../../../tools";

type ButtonType = "filled" | "linear" | "warn" | "transparent";
type ButtonSize = "big" | "medium" | "small" | "tiny";
type originalButtonType = "button" | "submit" | "reset";

interface CommonProps extends HTMLAttributes<HTMLButtonElement> {}

interface ButtonProps extends CommonProps {
  disabled?: boolean;
  margin?: CSSProperties["margin"];
  bottom?: CSSProperties["marginBottom"];
  flex?: CSSProperties["flex"];
  self?: CSSProperties["alignSelf"];
  stretch?: boolean;
  size?: ButtonSize;
  icon?: IconType;
  type?: ButtonType;
  formType?: originalButtonType;
  action?: () => void;
  loading?: boolean;
}

interface StyledButtonProps extends CommonProps {
  type?: originalButtonType;
  buttonType?: ButtonType;
  CSSValues?: CSSProperties;
  isLoading?: boolean;
  isHover?: boolean;
  isClicked?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  outline: 0;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color 0.1s, border-color 0.1s, color 0.1s,
    transform 0.1s;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: 400;

  &[disabled] {
    ${({ theme }) => `
    border: 1px dashed ${theme.colors.gray.solid(50)};
    color: ${theme.colors.gray.solid(70)};
    background-color: ${theme.colors.background.main};
    pointer-events: none;
    `}
  }

  & > * {
    opacity: 1;
    transition: opacity 0.1s;
    will-change: var(--willchangedefault), opacity;
    ${({ isLoading }) =>
      isLoading &&
      `
      opacity: 0;
    `}
  }

  ${({ isHover, isClicked }) =>
    isHover && isClicked && "transform: scale(0.98);"}

  ${({ buttonType, theme, isHover, isClicked }) =>
    buttonType === "filled"
      ? `
    border-color: transparent;
    background-color: ${theme.colors.text.main};
    color: ${theme.colors.background.main};

    ${
      isHover
        ? isClicked
          ? `
    background-color: ${theme.colors.text.solid(65)};
    `
          : `
    background-color: ${theme.colors.text.solid(80)};
    `
        : ""
    }
    `
      : buttonType === "linear"
      ? `
    border-color: ${theme.colors.text.main};
    background-color: ${theme.colors.background.main};
    color: ${theme.colors.text.main};

    ${
      isHover
        ? isClicked
          ? `
    background-color: ${theme.colors.text.solid(10)};
    border-color: ${theme.colors.gray.solid(70)};
    `
          : `
    border-color: ${theme.colors.gray.solid(70)};
    `
        : ""
    }
    `
      : buttonType === "warn"
      ? `
    border-color: transparent;
    color: ${theme.colors.white.main};
    background-color: ${theme.colors.red.main};

    ${
      isHover
        ? isClicked
          ? `
    background-color: ${theme.colors.red.solid(65)};
    `
          : `
    background-color: ${theme.colors.red.solid(80)};
    `
        : ""
    }
  `
      : `
  border: 0;
  background-color: transparent;
  color: ${theme.colors.text.main};

  ${
    isHover
      ? isClicked
        ? `
  background-color: ${theme.colors.gray.solid(35)};
  `
        : `
  background-color: ${theme.colors.gray.solid(20)};
  `
      : ""
  }
      `}

  ${({ CSSValues }) => ({ ...CSSValues })}
`;

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  (
    {
      loading,
      children,
      icon,
      flex,
      self,
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
      flex,
      alignSelf: self,
      margin,
      width: stretch ? "100%" : undefined,
      padding:
        size === "big"
          ? "17px 26px"
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
