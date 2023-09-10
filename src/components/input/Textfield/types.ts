import { CSSProperties, HTMLAttributes } from "react";

import { IconType } from "../../generic";

export interface TextfieldProps extends HTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  margin?: CSSProperties["margin"];
  bottom?: CSSProperties["marginBottom"];
  stretch?: boolean;
  icon?: IconType;
  rightIconButton?: IconType;
  rightIconAction?: () => void;
  label?: string;
  assistive?: string;
  error?: string;
  placeholder?: string;
  type?: HTMLInputElement["type"];
  value?: string;
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
}
