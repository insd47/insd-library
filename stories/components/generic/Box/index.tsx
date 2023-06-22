import styled from "@emotion/styled";
import { CSSProperties, PropsWithChildren, forwardRef } from "react";

import {
  BoxProps,
  StyledBoxProps,
  HorizontalAlign,
  VerticalAlign,
} from "./types";

const StyledBox = styled.div<StyledBoxProps>`
  display: flex;
  color: ${({ theme }) => theme.colors.text.main};

  ${({ CSSValues }) => ({ ...CSSValues })}
`;

const Box = forwardRef<HTMLDivElement, PropsWithChildren<BoxProps>>(
  (
    {
      children,
      component = "div",
      direction = "vertical",
      flex,
      margin,
      padding,
      bottom,
      vertical = "top",
      horizontal = "left",
      gap,
      ...props
    },
    ref
  ) => {
    const translate = (value: HorizontalAlign | VerticalAlign) => {
      const customs = {
        top: "flex-start",
        right: "flex-end",
        left: "flex-start",
        bottom: "flex-end",
        center: "center",
        stretch: "stretch",
      };

      return customs[value];
    };

    const CSSValues = {
      flex,
      flexDirection: (direction === "vertical"
        ? "column"
        : "row") as CSSProperties["flexDirection"],
      margin,
      padding,
      marginBottom: bottom,
      alignItems:
        direction === "vertical" ? translate(horizontal) : translate(vertical),
      justifyContent:
        direction === "vertical" ? translate(vertical) : translate(horizontal),
      columnGap: direction === "horizontal" ? gap : undefined,
      rowGap: direction === "vertical" ? gap : undefined,
    };

    return (
      <StyledBox as={component} ref={ref} CSSValues={CSSValues} {...props}>
        {children}
      </StyledBox>
    );
  }
);

export default Box;
