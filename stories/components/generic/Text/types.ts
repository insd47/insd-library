import { CSSProperties, HTMLAttributes } from "react";

type TextType = "title" | "paragraph" | "ui";
type TextTemplate = 1 | 2 | 3;
type TextWeight = "thin" | "light" | "regular" | "medium" | "bold";

interface CommonProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  maxLines?: number;
}

export interface StyledTextProps extends CommonProps {
  CSSValues?: CSSProperties;
}

export interface TextProps extends CommonProps {
  type?: TextType;
  inline?: boolean;
  template?: TextTemplate;
  size?: CSSProperties["fontSize"];
  weight?: TextWeight;
  line?: CSSProperties["lineHeight"];
  flex?: CSSProperties["flex"];
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  inherit?: boolean;
}
