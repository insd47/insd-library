import { HTMLAttributes } from "react";

export interface SwitchProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  size?: "small" | "medium" | "big";
  disabled?: boolean;
  checked?: boolean;
  onChange?: (v: boolean) => void;
  name?: string;
  lValue?: string;
  rValue?: string;
}