import styled from "@emotion/styled";
import { PropsWithChildren, forwardRef } from "react";
import { StyledBlockProps, BlockProps } from "./types";

const StyledBlock = styled.div<StyledBlockProps>`
  ${({ CSSValues }) => ({ ...CSSValues })}
`;

const Block = forwardRef<HTMLDivElement, PropsWithChildren<BlockProps>>(
  (
    { children, component = "div", flex, margin, padding, bottom, ...props },
    ref
  ) => {
    const CSSValues = {
      flex,
      margin,
      padding,
      marginBottom: bottom,
    };

    return (
      <StyledBlock as={component} ref={ref} CSSValues={CSSValues} {...props}>
        {children}
      </StyledBlock>
    );
  }
);

export default Block;
