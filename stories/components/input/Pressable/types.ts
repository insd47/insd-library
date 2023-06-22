import { CSSProperties, HTMLAttributes, ReactElement } from "react";

type originalButtonType = "button" | "submit" | "reset";

interface CommonProps extends HTMLAttributes<HTMLButtonElement> {}

export interface PressableProps extends CommonProps {
  flex?: CSSProperties["flex"];
  self?: CSSProperties["alignSelf"];
  margin?: CSSProperties["margin"];
  bottom?: CSSProperties["marginBottom"];
  link?: ReactElement;
  type: "icon" | "text";
  formType?: originalButtonType;
  disabled?: boolean;
  action?: () => void;
}

export interface StyledPressableProps extends CommonProps {
  type?: originalButtonType;
  hasLink?: boolean;
  CSSValues?: CSSProperties;
  isClicked?: boolean;
  isHover?: boolean;
  isTouched?: boolean;
  uniform?: boolean;
}
