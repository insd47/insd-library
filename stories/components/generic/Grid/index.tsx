import styled from "@emotion/styled";
import {
  CSSProperties,
  PropsWithChildren,
  forwardRef,
  HTMLAttributes,
  ElementType,
} from "react";

type GridDirection = "vertical" | "horizontal";

interface CommonProps extends HTMLAttributes<HTMLDivElement> {}

interface GridProps extends CommonProps {
  component?: ElementType;
  d?: GridDirection;
  flex?: CSSProperties["flex"];
  self?: CSSProperties["alignSelf"];
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  bottom?: CSSProperties["marginBottom"];
  v?: CSSProperties["gridTemplateRows"];
  h?: CSSProperties["gridTemplateColumns"];
  gap?: CSSProperties["rowGap"];
  lineGap?: CSSProperties["rowGap"];
}

interface StyledGridProps extends CommonProps {
  CSSValues?: CSSProperties;
}

const StyledGrid = styled.div<StyledGridProps>`
  display: grid;

  ${({ CSSValues }) => ({ ...CSSValues })}
`;

const Grid = forwardRef<HTMLDivElement, PropsWithChildren<GridProps>>(
  (
    {
      children,
      component = "div",
      d,
      flex,
      self,
      margin,
      padding,
      bottom,
      v,
      h,
      gap,
      lineGap,
      ...props
    },
    ref
  ) => {
    const isHorizontal = h || d === "horizontal";

    const CSSValues = {
      gridAutoFlow: d && d === "horizontal" ? "column" : "row",
      flex,
      alignSelf: self,
      margin,
      padding,
      marginBottom: bottom,
      gridTemplateRows: v,
      gridTemplateColumns: h,
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
