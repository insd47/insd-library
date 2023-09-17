import { CSSProperties, HTMLAttributes } from "react";

type borderType = 1 | 2 | 3;
type radiusType = 1 | 2 | 3 | 4 | 5;

interface CommonProps extends HTMLAttributes<HTMLDivElement> {
  background?: "bg" | "fg1" | "fg2" | "fg3";
  border?:
    | borderType
    | {
        top?: borderType;
        right?: borderType;
        bottom?: borderType;
        left?: borderType;
      };
  radius?:
    | radiusType
    | {
        topLeft?: radiusType;
        topRight?: radiusType;
        bottomLeft?: radiusType;
        bottomRight?: radiusType;
      };
}

export interface BoxProps extends CommonProps {
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  overflow?: CSSProperties["overflow"];
}

export interface StyledBoxProps extends CommonProps {
  CSSValues?: CSSProperties;
}
