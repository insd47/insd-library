import styled from "@emotion/styled";
import { PropsWithChildren, forwardRef } from "react";
import { StyledGridProps, GridProps } from "./types";

const StyledGrid = styled.div<StyledGridProps>`
  display: grid;

  ${({ CSSValues }) => ({ ...CSSValues })}
`;

const Grid = forwardRef<HTMLDivElement, PropsWithChildren<GridProps>>(
  (
    {
      children,
      component = "div",
      direction,
      flex,
      margin,
      padding,
      bottom,
      vertical,
      horizontal,
      gap,
      lineGap,
      ...props
    },
    ref
  ) => {
    const isHorizontal = horizontal || direction === "horizontal";

    const CSSValues = {
      gridAutoFlow: direction && direction === "horizontal" ? "column" : "row",
      flex,
      margin,
      padding,
      marginBottom: bottom,
      gridTemplateRows: vertical,
      gridTemplateColumns: horizontal,
      rowGap: isHorizontal ? lineGap : gap,
      columnGap: isHorizontal ? gap : lineGap,
    };

    return (
      <StyledGrid as={component} ref={ref} CSSValues={CSSValues} {...props}>
        {children}
      </StyledGrid>
    );
  }
);

export default Grid;
