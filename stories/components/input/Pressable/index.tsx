import { PropsWithChildren, forwardRef, cloneElement } from "react";

import StyledPressable from "./styles";

import { usePointerEvents } from "../../../../tools";
import { PressableProps } from "./types";

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
