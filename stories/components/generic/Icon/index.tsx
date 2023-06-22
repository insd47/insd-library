import styled from "@emotion/styled";
import { PropsWithChildren, forwardRef } from "react";

import { StyledIconProps, IconProps } from "./types";

const StyledIcon = styled.i<StyledIconProps>`
  font-family: var(--font-icon);
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  letter-spacing: 0;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga=1";
  -moz-font-feature-settings: "liga";
  -ms-font-feature-settings: "liga" 1;
  font-feature-settings: "liga";
  -webkit-font-variant-ligatures: discretionary-ligatures;
  font-variant-ligatures: discretionary-ligatures;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ${({ CSSValues }) => ({ ...CSSValues })}
`;

const Icon = forwardRef<HTMLSpanElement, PropsWithChildren<IconProps>>(
  (
    {
      children,
      type = "link",
      size = 24,
      margin,
      padding,
      right,
      disabled,
      ...props
    },
    ref
  ) => {
    const CSSValues = {
      fontSize: size,
      margin,
      padding,
      marginRight: right,
    };

    return (
      <StyledIcon ref={ref} CSSValues={CSSValues} {...props}>
        {type}
      </StyledIcon>
    );
  }
);

export default Icon;
