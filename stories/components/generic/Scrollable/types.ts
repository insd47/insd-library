import { CSSProperties, ElementType, HTMLAttributes } from "react";

interface CommonProps extends HTMLAttributes<HTMLDivElement> {}

export interface ScrollableProps extends CommonProps {
  component?: ElementType;
  flex?: CSSProperties["flex"];
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  bottom?: CSSProperties["marginBottom"];
  x?: boolean;
  y?: boolean;
}

export interface StyledScrollableProps extends CommonProps {
  CSSValues?: CSSProperties;
  posX?: boolean;
  posY?: boolean;
}
