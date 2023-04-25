import styled from "@emotion/styled";
import {
  CSSProperties,
  PropsWithChildren,
  forwardRef,
  HTMLAttributes,
  ReactElement,
  cloneElement,
} from "react";
import { usePointerEvents } from "../../../../tools";

type originalButtonType = "button" | "submit" | "reset";

interface CommonProps extends HTMLAttributes<HTMLButtonElement> {}

interface PressableProps extends CommonProps {
  flex?: CSSProperties["flex"];
  self?: CSSProperties["alignSelf"];
  margin?: CSSProperties["margin"];
  bottom?: CSSProperties["marginBottom"];
  link?: ReactElement;
  type: "icon" | "text";
  formType?: originalButtonType;
  disabled?: boolean;
  action?: () => void;
}

interface StyledPressableProps extends CommonProps {
  type?: originalButtonType;
  hasLink?: boolean;
  CSSValues?: CSSProperties;
  isClicked?: boolean;
  isHover?: boolean;
  isTouched?: boolean;
  uniform?: boolean;
}

const StyledPressable = styled.button<StyledPressableProps>`
  border: 0;
  background-color: transparent;
  padding: 0;
  outline: 0;
  font-size: inherit;
  cursor: pointer;
  position: relative;
  transition: transform 0.1s;
  text-decoration: none;
  ${({ hasLink, theme }) =>
    hasLink ? `color: ${theme.colors.blue.main};` : "color: inherit;"}

  &:after {
    content: "";
    position: absolute;
    width: ${({ uniform }) =>
      uniform ? "calc(100% + 6px)" : "calc(100% + 12px)"};
    height: calc(100% + 6px);
    left: ${({ uniform }) => (uniform ? "-3px" : "-6px")};
    top: -3px;
    background-color: transparent;
    pointer-events: none;
    transition: background-color 0.1s;
    border-radius: 6px;
    z-index: -1;
  }

  ${({ isHover, isClicked }) =>
    isHover && isClicked && "transform: scale(0.98);"}

  ${({ theme, hasLink, isHover, isClicked }) =>
    hasLink
      ? isHover
        ? isClicked
          ? `
      text-decoration: underline;
      &:after {
        background-color: ${theme.colors.blue.alpha(35)};
      }
        `
          : `
        text-decoration: underline;
        &:after {
          background-color: ${theme.colors.blue.alpha(20)};
        }
        `
        : ""
      : isHover
      ? isClicked
        ? `
        &:after {
          background-color: ${theme.colors.gray.alpha(35)};
        }
        `
        : `
        &:after {
          background-color: ${theme.colors.gray.alpha(20)};
        }
        `
      : ""}

  &[disabled] {
    ${({ theme }) => `
    color: ${theme.colors.gray.alpha(50)} !important;
    pointer-events: none;
    `}
  }

  &:focus-visible {
    outline: 1px dashed ${({ theme }) => theme.colors.gray.main};
    outline-offset: 4px;
  }

  ${({ CSSValues }) => ({ ...CSSValues })}
`;

const Pressable = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<PressableProps>
>(
  (
    {
      children,
      flex,
      self,
      link,
      type = "text",
      formType = "button",
      action,
      margin,
      bottom,
      disabled,
      ...props
    }: PressableProps,
    ref
  ) => {
    const CSSValues = {
      flex,
      alignSelf: self,
      margin,
      marginBottom: bottom,
    };

    const { pointerEvents, pointerValues } = usePointerEvents();

    const PressableElement = (
      <StyledPressable
        type={formType}
        hasLink={link && true}
        ref={ref}
        disabled={disabled}
        uniform={type === "icon"}
        CSSValues={CSSValues}
        onClick={action ? () => action() : undefined}
        {...pointerEvents}
        {...pointerValues}
        {...props}
      >
        {children}
      </StyledPressable>
    );

    return link
      ? cloneElement(link, {
          children: PressableElement,
        })
      : PressableElement;
  }
);

export default Pressable;
