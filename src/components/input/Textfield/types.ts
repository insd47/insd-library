import { CSSProperties, HTMLAttributes, InputHTMLAttributes } from "react";

import { IconType } from "../../common/icon/fonts/types";

export interface TextfieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  disabled?: boolean;
  size?: "medium" | "small";
  margin?: CSSProperties["margin"];
  bottom?: CSSProperties["marginBottom"];
  stretch?: boolean;
  icon?: IconType;
  rightIconButton?: IconType;
  rightIconAction?: () => void;
  label?: string;
  assistive?: string;
  error?: string | boolean;
  placeholder?: string;
  type?: HTMLInputElement["type"];
  value?: string;
  className?: string;
  style?: CSSProperties;
}

export interface StyledTextfieldContainerProps
  extends HTMLAttributes<HTMLDivElement> {
  stretch?: boolean;
}

export interface StyledTextfieldLabelProps {
  error?: boolean;
}

export interface StyledTextfieldProps extends HTMLAttributes<HTMLDivElement> {
  CSSValues?: CSSProperties;
  isHover?: boolean;
  isPressed?: boolean;
  disabled?: boolean;
  error?: boolean;
  size?: "medium" | "small";
  rightIconButton?: boolean;
}
