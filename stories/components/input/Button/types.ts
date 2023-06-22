import { CSSProperties, HTMLAttributes } from "react";

import { IconType } from "../../generic/Icon/types";

type ButtonType = "filled" | "linear" | "warn" | "transparent";
type ButtonSize = "big" | "medium" | "small" | "tiny";
type originalButtonType = "button" | "submit" | "reset";

interface CommonProps extends HTMLAttributes<HTMLButtonElement> {}

export interface ButtonProps extends CommonProps {
  disabled?: boolean;
  margin?: CSSProperties["margin"];
  bottom?: CSSProperties["marginBottom"];
  flex?: CSSProperties["flex"];
  stretch?: boolean;
  size?: ButtonSize;
  icon?: IconType;
  type?: ButtonType;
  formType?: originalButtonType;
  action?: () => void;
  loading?: boolean;
}

export interface StyledButtonProps extends CommonProps {
  type?: originalButtonType;
  buttonType?: ButtonType;
  CSSValues?: CSSProperties;
  isLoading?: boolean;
  isHover?: boolean;
  isClicked?: boolean;
}
