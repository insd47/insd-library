import styled from "@emotion/styled";
import { forwardRef, PropsWithChildren } from "react";

import { ScrollableProps, StyledScrollableProps } from "./types";

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
    { children, flex, margin, padding, bottom, x = false, y = true, ...props },
    ref
  ) => {
    const CSSValues = {
      flex,
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
