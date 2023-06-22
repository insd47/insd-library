import { forwardRef } from "react";

import StyledLoading from "./styles";
import { LoadingProps } from "./types";

const Loading = forwardRef<HTMLSpanElement, LoadingProps>(
  ({ size = "medium", flex, margin, padding, style, ...props }, ref) => {
    const CSSValues = {
      flex,
      margin,
      padding,
    };

    return (
      <StyledLoading
        ref={ref}
        size={size}
        CSSValues={CSSValues}
        style={style}
        {...props}
      >
        <span />
        <span />
        <span />
        <span>Loading...</span>
      </StyledLoading>
    );
  }
);

export default Loading;
