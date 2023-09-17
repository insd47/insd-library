"use client";

import React, {
  PropsWithChildren,
  forwardRef,
  Children,
  ReactElement,
  cloneElement,
  isValidElement,
} from "react";

import { StyledTab, StyledTabList } from "./styles";
import type { TabListProps, TabProps } from "./types";

export const TabList: React.FC<PropsWithChildren<TabListProps>> = ({
  stretch = true,
  index,
  onIndexChange,
  children,
  padding = "0 24px",
  ...props
}) => {
  return (
    <StyledTabList padding={padding} {...props}>
      {Children.toArray(children)
        .filter((child) => isValidElement(child) && child.type === Tab)
        .map((child, i) =>
          cloneElement(child as ReactElement<TabProps>, {
            isActive: index === i,
            onClick: () => onIndexChange && onIndexChange(i),
          })
        )}
    </StyledTabList>
  );
};

export const Tab = forwardRef<HTMLDivElement, PropsWithChildren<TabProps>>(
  ({ children, isActive }) => {
    return <StyledTab isActive={isActive}>{children}</StyledTab>;
  }
);
