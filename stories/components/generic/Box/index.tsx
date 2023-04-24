import styled from "@emotion/styled";
import {
  CSSProperties,
  PropsWithChildren,
  forwardRef,
  HTMLAttributes,
  ElementType,
} from "react";

type FlexDirection = "h" | "v";

type GeneralAlign =
  | "stretch"
  | "space-between"
  | "space-around"
  | "space-evenly";

type VerticalAlign = "top" | "center" | "bottom" | GeneralAlign;
type HorizontalAlign = "left" | "center" | "right" | GeneralAlign;

interface CommonProps extends HTMLAttributes<HTMLDivElement> {}

interface StyledBoxProps extends CommonProps {
  CSSValues?: CSSProperties;
}

interface BoxProps extends CommonProps {
  component?: ElementType;
  d?: FlexDirection;
  flex?: CSSProperties["flex"];
  self?: CSSProperties["alignSelf"];
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  bottom?: CSSProperties["marginBottom"];
  v?: VerticalAlign;
  h?: HorizontalAlign;
  gap?: CSSProperties["rowGap"];
}

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
      d = "v",
      flex,
      self,
      margin,
      padding,
      bottom,
      v = "top",
      h = "left",
      gap,
      ...props
    },
    ref
  ) => {
    const transHorizontal = (value: HorizontalAlign) => {
      const customs = {
        left: "flex-start",
        right: "flex-end",
      };

      if (value === "left" || value === "right") return customs[value];
      else return value;
    };

    const transVertical = (value: VerticalAlign) => {
      const customs = {
        top: "flex-start",
        bottom: "flex-end",
      };

      if (value === "top" || value === "bottom") return customs[value];
      else return value;
    };

    const transDirection = {
      v: "column",
      h: "row",
    };

    const CSSValues = {
      flex,
      alignSelf: self,
      flexDirection: transDirection[d] as CSSProperties["flexDirection"],
      margin,
      padding,
      marginBottom: bottom,
      alignItems: d === "v" ? transHorizontal(h) : transVertical(v),
      justifyContent: d === "v" ? transVertical(v) : transHorizontal(h),
      columnGap: d === "h" ? gap : undefined,
      rowGap: d === "v" ? gap : undefined,
    };

    return (
      <StyledBox as={component} ref={ref} CSSValues={CSSValues} {...props}>
        {children}
      </StyledBox>
    );
  }
);

export default Box;
