import styled from "@emotion/styled";
import { StyledBoxProps } from "./types";

const StyledBox = styled.div<StyledBoxProps>`
  box-sizing: border-box;
  border: 1px solid transparent;

  ${({ background, border, radius }) => ({
    backgroundColor: background,
    borderColor: border,
    borderRadius: radius,
  })}

  ${({ CSSValues }) => ({ ...CSSValues })}
`;

export default StyledBox;
