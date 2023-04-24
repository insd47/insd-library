import styled from "@emotion/styled";
import {
  CSSProperties,
  ElementType,
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

interface CommonProps extends HTMLAttributes<HTMLDivElement> {}

interface ScrollableProps extends CommonProps {
  component?: ElementType;
  flex?: CSSProperties["flex"];
  self?: CSSProperties["alignSelf"];
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  bottom?: CSSProperties["marginBottom"];
  x?: boolean;
  y?: boolean;
}

interface StyledScrollableProps extends CommonProps {
  CSSValues?: CSSProperties;
  posX?: boolean;
  posY?: boolean;
}

const StyledScrollable = styled.div<StyledScrollableProps>(
  ({ CSSValues, posX, posY }) => `
  position: relative;
  max-height: 100%;
  overflow-x: ${posX ? "auto" : "hidden"};
  overflow-y: ${posY ? "auto" : "hidden"};

  ${CSSValues}
`
);

const Scrollable = forwardRef<
  HTMLDivElement,
  PropsWithChildren<ScrollableProps>
>(
  (
    {
      children,
      flex,
      self,
      margin,
      padding,
      bottom,
      x = false,
      y = true,
      ...props
    },
    ref
  ) => {
    const CSSValues = {
      flex,
      alignSelf: self,
      margin,
      padding,
      marginBottom: bottom,
    };
    return (
      <StyledScrollable
        ref={ref}
        posX={x}
        posY={y}
        CSSValues={CSSValues}
        {...props}
      >
        {children}
      </StyledScrollable>
    );
  }
);

export default Scrollable;
