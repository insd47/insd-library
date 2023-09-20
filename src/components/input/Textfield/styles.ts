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
  ${({ rightIconButton }) => (rightIconButton ? "padding-right: 5px;" : "")}
  border-radius: 12px;
  transition: opacity 0.2s, border-color 0.2s;
  font-family: var(--font-main), sans-serif;
  width: 100%;

  ${({ size, rightIconButton }) =>
    size === "small" &&
    `height: 34px;
    padding: 0 10px;
    border-radius: 10px;
    ${rightIconButton ? "padding-right: 7px;" : ""}
  `}

  align-items: center;

  ${({ disabled }) => disabled && `cursor: not allowed;`}

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
    color: ${({ theme }) => theme.colors.text.main + ""};
    transition: opacity 0.2s;

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &::placeholder {
      transition: color 0.2s;
      color: ${({ theme }) => theme.colors.text.passive[1] + ""};
    }
  }

  & > button {
    z-index: 1;
    transition: color 0.2s;
  }
`;
