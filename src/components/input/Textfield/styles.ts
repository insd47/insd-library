import styled from "@emotion/styled";
import {
  StyledTextfieldContainerProps,
  StyledTextfieldLabelProps,
  StyledTextfieldProps,
} from "./types";

export const StyledTextfieldContainer = styled.div<StyledTextfieldContainerProps>`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  font-family: var(--font-main), sans-serif;

  ${({ stretch }) => (stretch ? "width: 100%;" : "width: 200px;")}
`;

export const StyledTextfieldLabel = styled.p<StyledTextfieldLabelProps>`
  padding: 0 12px;
  font-size: 12px;
  line-height: 16px;
  margin: 0;
  font-family: var(--font-main), sans-serif;

  color: ${({ theme, error }) =>
    error
      ? theme.colors.secondary.red + ""
      : theme.colors.text.passive[1] + ""};
`;

export const StyledTextfield = styled.div<StyledTextfieldProps>`
  position: relative;
  display: flex;
  column-gap: 6px;
  padding: 0 12px;
  box-sizing: border-box;
  border-radius: 12px;
  transition: border-color 0.2s;
  font-family: var(--font-main), sans-serif;
  width: 100%;

  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    ${({ theme }) => `
    border: 1px dashed ${theme.colors.box.border[2]};
    color: ${theme.colors.text.passive[1]};
    background-color: ${theme.colors.box.foreground[3]};
    pointer-events: none;
    `}
  }

  ${({ theme }) => ({
    border: `1px solid ${theme.colors.box.border[2]}`,
    color: theme.colors.text.main + "",
    backgroundColor: theme.colors.box.foreground[3] + "",
  })}

  ${({ isHover, theme }) => ({
    borderColor: isHover ? theme.colors.text.passive[3] + "" : "",
  })}

  ${({ CSSValues }) => ({ ...CSSValues })}

  &:focus-within {
    ${({ theme }) => ({
      borderColor: `${theme.colors.text.passive[1]}`,
    })}
  }

  ${({ error, theme }) => ({
    borderColor: error ? theme.colors.secondary.red + " !important" : "",
  })}

  & > input {
    width: 100%;
    outline: 0;
    background-color: transparent;
    color: inherit;
    font-family: inherit;
    font-size: 14px;
    line-height: 18px;
    border: 0;
    padding: 12px 0;

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.passive[1] + ""};
    }
  }

  & > button {
    z-index: 1;
  }
`;
