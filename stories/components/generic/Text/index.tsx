import styled from "@emotion/styled";
import {
  CSSProperties,
  PropsWithChildren,
  forwardRef,
  HTMLAttributes,
  ElementType,
} from "react";

import { TextStyles, Weights, FindTemplate } from "./styles";

type TextType = "title" | "paragraph" | "uin" | "uim";
type TextTemplate = 1 | 2 | 3 | 4;
type TextWeight = "thin" | "light" | "regular" | "medium" | "bold";

interface CommonProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  maxLines?: number;
}

interface StyledTextProps extends CommonProps {
  CSSValues?: CSSProperties;
}

interface TextProps extends CommonProps {
  type?: TextType;
  inline?: boolean;
  template?: TextTemplate;
  size?: CSSProperties["fontSize"];
  weight?: TextWeight;
  line?: CSSProperties["lineHeight"];
  flex?: CSSProperties["flex"];
  self?: CSSProperties["alignSelf"];
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  inherit?: boolean;
}

const StyledText = styled.p<StyledTextProps>`
  ${({ maxLines }) =>
    maxLines &&
    `
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${maxLines};
    overflow: hidden;
  `}

  ${({ disabled, CSSValues, theme }) => ({
    color: disabled ? theme.colors.gray.main : undefined,
    ...CSSValues,
  })}
`;

const Text = forwardRef<HTMLParagraphElement, PropsWithChildren<TextProps>>(
  (
    {
      children,
      inline,
      type = "uin",
      template = 2,
      inherit = false,
      size,
      weight,
      line,
      flex,
      self,
      margin,
      padding,
      disabled,
      tabIndex,
      maxLines,
      ...props
    },
    ref
  ) => {
    const CSSValues = {
      flex,
      alignSelf: self,
      margin: margin ? margin : 0,
      padding: padding ? padding : 0,
      ...(!inherit
        ? {
            fontSize: size
              ? size
              : TextStyles[type][FindTemplate(type, template)].size,
            lineHeight: line
              ? line.toString() + "px"
              : TextStyles[type][FindTemplate(type, template)].line.toString() +
                "px",
            fontWeight: weight
              ? Weights[weight]
              : TextStyles[type][FindTemplate(type, template)].weight,
          }
        : {
            fontSize: size ? size : "inherit",
            lineHeight: line ? line.toString() + "px" : "inherit",
            fontWeight: weight ? Weights[weight] : "inherit",
          }),
    };

    return (
      <StyledText
        as={
          inline
            ? "span"
            : type === "title"
            ? (("h" + template.toString()) as ElementType)
            : "p"
        }
        tabIndex={disabled ? -1 : tabIndex}
        ref={ref}
        CSSValues={CSSValues}
        maxLines={maxLines}
        {...props}
      >
        {children}
      </StyledText>
    );
  }
);

export default Text;
