import { forwardRef } from "react";

import StyledLoading from "./styles";
import { LoadingProps } from "./types";

const Loading = forwardRef<HTMLSpanElement, LoadingProps>(
  ({ size = "medium", margin, padding, style, ...props }, ref) => {
    const CSSValues = {
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
