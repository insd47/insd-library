import { InsdColor } from "@/theme/colors";
import { CSSProperties, HTMLAttributes } from "react";

export type LoadingSize = "big" | "medium" | "small";

interface CommonProps extends Omit<HTMLAttributes<HTMLSpanElement>, "color"> {
  size?: LoadingSize;
  type?: "default" | "reverse" | "white";
}

export interface LoadingProps extends CommonProps {
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  style?: CSSProperties;
}

export interface StyledLoadingProps extends CommonProps {
  CSSValues?: CSSProperties;
  loadingColor?: InsdColor;
}
