import { CSSProperties, HTMLAttributes } from "react";

export interface TabListProps extends HTMLAttributes<HTMLDivElement> {
  stretch?: boolean;
  index?: number;
  onIndexChange?: (index: number) => void;
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  height?: CSSProperties["height"];
}

export interface TabProps extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  stretch?: boolean;
}
