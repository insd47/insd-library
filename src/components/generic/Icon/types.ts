import { CSSProperties, HTMLAttributes } from "react";

import type { IconType } from "./fonts/types";

interface CommonProps extends HTMLAttributes<HTMLDivElement> {}

export interface IconProps extends CommonProps {
  type?: IconType;
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  right?: CSSProperties["marginRight"];
  disabled?: boolean;
  pressable?: boolean;
  action?: () => void;
  size?: number;
  buttonSize?: number;
}

export interface StyledIconProps extends CommonProps {
  CSSValues?: CSSProperties;
  size: number;
}

export interface StyledIconButtonProps {
  pressable?: boolean;
  isHover?: boolean;
  isPressed?: boolean;
  size: number;
}
