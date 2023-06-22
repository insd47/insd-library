import { CSSProperties, HTMLAttributes, ElementType } from "react";

type GridDirection = "vertical" | "horizontal";

interface CommonProps extends HTMLAttributes<HTMLDivElement> {}

export interface GridProps extends CommonProps {
  component?: ElementType;
  direction?: GridDirection;
  flex?: CSSProperties["flex"];
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  bottom?: CSSProperties["marginBottom"];
  vertical?: CSSProperties["gridTemplateRows"];
  horizontal?: CSSProperties["gridTemplateColumns"];
  gap?: CSSProperties["rowGap"];
  lineGap?: CSSProperties["rowGap"];
}

export interface StyledGridProps extends CommonProps {
  CSSValues?: CSSProperties;
}
