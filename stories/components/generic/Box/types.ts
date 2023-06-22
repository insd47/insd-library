import { CSSProperties, HTMLAttributes, ElementType } from "react";

type FlexDirection = "horizontal" | "vertical";

export type VerticalAlign = "top" | "center" | "bottom" | "stretch";
export type HorizontalAlign = "left" | "center" | "right" | "stretch";

interface CommonProps extends HTMLAttributes<HTMLDivElement> {}

export interface StyledBoxProps extends CommonProps {
  CSSValues?: CSSProperties;
}

export interface BoxProps extends CommonProps {
  component?: ElementType;
  direction?: FlexDirection;
  flex?: CSSProperties["flex"];
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  bottom?: CSSProperties["marginBottom"];
  vertical?: VerticalAlign;
  horizontal?: HorizontalAlign;
  gap?: CSSProperties["rowGap"];
}
