import { CSSProperties, HTMLAttributes, ElementType } from "react";

interface CommonProps extends HTMLAttributes<HTMLDivElement> {}

export interface StyledBlockProps extends CommonProps {
  CSSValues?: CSSProperties;
}

export interface BlockProps extends CommonProps {
  component?: ElementType;
  flex?: CSSProperties["flex"];
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  bottom?: CSSProperties["marginBottom"];
}
