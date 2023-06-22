import styled from "@emotion/styled";
import { PropsWithChildren, forwardRef, ElementType } from "react";

import { TextStyles, Weights } from "./styles";
import { TextProps, StyledTextProps } from "./types";

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
      type = "ui",
      template = 2,
      inherit = false,
      size,
      weight,
      line,
      flex,
      margin,
      padding,
      disabled,
      tabIndex,
      maxLines,
      ...props
    },
    ref
  ) => {
    const templateIndex = Math.min(template - 1, type === "paragraph" ? 1 : 2);

    const CSSValues = {
      flex,
      margin: margin ? margin : 0,
      padding: padding ? padding : 0,
      ...(!inherit
        ? {
            fontSize: size ? size : TextStyles[type][templateIndex].size,
            lineHeight: line
              ? line.toString() + "px"
              : TextStyles[type][templateIndex].line.toString() + "px",
            fontWeight: weight
              ? Weights[weight]
              : TextStyles[type][templateIndex].weight,
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
