import { CSSProperties, HTMLAttributes } from "react";

interface CommonProps extends HTMLAttributes<HTMLDivElement> {
  background: "bg" | "fg1" | "fg2" | "fg3";
  border: 1 | 2 | 3;
  radius: 1 | 2 | 3 | 4 | 5;
  customBackground: CSSProperties["backgroundColor"];
  customBorder: CSSProperties["borderColor"];
  customRadius: CSSProperties["borderRadius"];
}

export interface BoxProps extends CommonProps {
  margin: CSSProperties["margin"];
  padding: CSSProperties["padding"];
  style?: CSSProperties;
}

export interface StyledBoxProps extends CommonProps {
  CSSValues?: CSSProperties;
}
