import type { CSSProperties, HTMLAttributes } from "react";

export interface BooleanProps
  extends Omit<HTMLAttributes<HTMLInputElement>, "type"> {
  type?: "checkbox" | "radio";
  checked?: boolean;
  margin?: CSSProperties["margin"];
  bottom?: CSSProperties["marginBottom"];
  disabled?: boolean;
  label?: string;
  labelDirection?: "left" | "right";
  className?: string;
  style?: CSSProperties;
}
