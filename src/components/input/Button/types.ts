import { CSSProperties, InputHTMLAttributes } from "react";

import { IconType } from "../../generic";

export type ButtonType = "filled" | "linear" | "warn" | "transparent";
export type ButtonSize = "big" | "medium" | "small" | "tiny";
type originalButtonType = "button" | "submit" | "reset";

interface CommonProps
  extends Omit<InputHTMLAttributes<HTMLButtonElement>, "size"> {}

export interface ButtonProps extends CommonProps {
  disabled?: boolean;
  margin?: CSSProperties["margin"];
  bottom?: CSSProperties["marginBottom"];
  stretch?: boolean;
  size?: ButtonSize;
  icon?: IconType;
  type?: ButtonType;
  formType?: originalButtonType;
  loading?: boolean;
}

export interface StyledButtonProps extends CommonProps {
  type?: originalButtonType;
  buttonType?: ButtonType;
  CSSValues?: CSSProperties;
  isLoading?: boolean;
  isHover?: boolean;
  isPressed?: boolean;
}
