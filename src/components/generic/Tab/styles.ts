import styled from "@emotion/styled";
import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { CSSProperties } from "react";

export const StyledTabList = styled(OverlayScrollbarsComponent)<{
  stretch?: boolean;
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  height?: CSSProperties["height"];
}>`
  box-sizing: border-box;
  min-height: 32px;
  display: flex;
  white-space: nowrap;

  .os-scrollbar {
    --os-padding-perpendicular: 0;
    --os-handle-border-radius: 0;
    --os-padding-axis: 0;
    --os-size: 3px;
    --os-handle-bg: ${({ theme }) => theme.colors.text.main.alpha(10) + ""};
    --os-handle-bg-hover: ${({ theme }) =>
      theme.colors.text.main.alpha(30) + ""};
    --os-handle-bg-active: ${({ theme }) =>
      theme.colors.text.main.alpha(50) + ""};
    --os-handle-max-size: 200px;
  }

  & > div[data-overlayscrollbars-contents] {
    ${({ stretch }) => stretch && "display: flex;"}
  }

  ${({ margin, padding, height }) => ({
    margin,
    padding,
    height,
  })}
`;

export const StyledTab = styled.div<{
  isActive?: boolean;
}>`
  cursor: pointer;
  position: relative;
  height: 100%;
  display: inline-flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  color: ${({ theme }) => theme.colors.text.passive[1] + ""};
  transition: color 0.15s;

  &:before {
    z-index: -1;
    content: "";
    position: absolute;
    top: 4px;
    left: 2px;
    width: calc(100% - 4px);
    height: calc(100% - 8px);
    border-radius: ${({ theme }) => theme.variables.radius[4] + ""};
    transition: background-color 0.07s;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: transparent;
    border-radius: 1px 1px 0 0;
    transition: background-color 0.15s;
  }

  @media (pointer: fine) and (hover: hover) {
    &:hover {
      &:before {
        background-color: ${({ theme }) => theme.colors.box.filled[1] + ""};
      }
    }
  }

  ${({ isActive, theme }) =>
    isActive &&
    `cursor: default;
    color: ${theme.colors.text.main};

    &:before {
      background-color: transparent !important;
    }

    &:after {
      background-color: ${theme.colors.text.main + " !important"};
    }`}
`;
