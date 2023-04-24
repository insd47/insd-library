import styled from "@emotion/styled";
import {
  CSSProperties,
  PropsWithChildren,
  forwardRef,
  HTMLAttributes,
  ElementType,
} from "react";

interface CommonProps extends HTMLAttributes<HTMLDivElement> {}

interface StyledBlockProps extends CommonProps {
  CSSValues?: CSSProperties;
}

interface BlockProps extends CommonProps {
  component?: ElementType;
  flex?: CSSProperties["flex"];
  self?: CSSProperties["alignSelf"];
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  bottom?: CSSProperties["marginBottom"];
}

const StyledBlock = styled.div<StyledBlockProps>`
  ${({ CSSValues }) => ({ ...CSSValues })}
`;

const Block = forwardRef<HTMLDivElement, PropsWithChildren<BlockProps>>(
  (
    {
      children,
      component = "div",
      flex,
      self,
      margin,
      padding,
      bottom,
      ...props
    },
    ref
  ) => {
    const CSSValues = {
      flex,
      margin,
      padding,
      alignSelf: self,
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
