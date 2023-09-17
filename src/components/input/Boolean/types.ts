import type { CSSProperties, InputHTMLAttributes } from "react";

export interface BooleanProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  type?: "checkbox" | "radio";
  checked?: boolean;
  margin?: CSSProperties["margin"];
  bottom?: CSSProperties["marginBottom"];
  disabled?: boolean;
  labelDirection?: "left" | "right";
  className?: string;
  style?: CSSProperties;
}
