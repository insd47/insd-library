import { CSSProperties, HTMLAttributes } from "react";

type LoadingSize = "big" | "medium" | "small";

interface CommonProps extends HTMLAttributes<HTMLSpanElement> {
  size?: LoadingSize;
}

export interface LoadingProps extends CommonProps {
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  style?: CSSProperties;
}

export interface StyledLoadingProps extends CommonProps {
  CSSValues?: CSSProperties;
}
