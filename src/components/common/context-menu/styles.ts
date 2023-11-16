import styled from "@emotion/styled";
import {
  StyledContextMenuProps,
  StyledItemProps,
  StyledSubMenuProps,
} from "./types";

export const StyledContextMenu = styled.ul<
  StyledContextMenuProps | StyledSubMenuProps
>`
  position: absolute;

  ${({ width }) => width && `width: ${width + "px"};`}
  background-color: ${({ theme }) => theme.colors.box.foreground[1] + ""};
  border: 1px solid ${({ theme }) => theme.colors.box.border[2] + ""};
  border-radius: ${({ theme }) => theme.variables.radius[2]};
  box-shadow: 0 10px 20px 0 ${({ theme }) => theme.colors.box.shadow[2] + ""};
  padding: 3px 0;
  box-sizing: border-box;

  list-style: none;
  margin: 0;
  padding: 3px 0;
  min-width: 200px;

  z-index: 100;
  pointer-events: all;

  ${({ type, ...props }) => {
    if (type !== "context-menu") return;
    if (!("open" in props)) return;

    const { x, y, open } = props;

    return `left: ${x + "px"};
    top: ${y + "px"};
  
    ${!open && "transition: opacity 0.15s;"}
    opacity: ${open ? 1 : 0};`;
  }}

  ${({ type, ...props }) => {
    if (type !== "sub-menu") return;
    if (!("boundary" in props)) return;

    const { boundary, isLeft } = props;

    return `
      left: ${
        isLeft ? "calc(-100% + 10px)" : `calc(100% + ${boundary.x - 10}px)`
      };
      top: -${boundary.y}px;
    `;
  }}
`;

export const StyledSeperator = styled.li`
  height: 1px;
  margin: 2px 0;
  background-color: ${({ theme }) => theme.colors.box.border[2] + ""};
`;

export const StyledDescription = styled.li`
  cursor: default;
  padding: 10px 16px 6px 16px;
  color: ${({ theme }) => theme.colors.text.passive[1] + ""};
`;

export const StyledItem = styled.li<StyledItemProps>`
  position: relative;
  display: flex;
  align-items: center;
  height: 34px;
  padding: 0 16px;
  column-gap: 12px;

  & > i {
    color: ${({ theme }) => theme.colors.text.passive[1] + ""};
  }

  & > p {
    flex: 1;
  }

  & > span {
    color: ${({ theme }) => theme.colors.text.main + ""};
  }

  & > svg {
    fill: ${({ theme }) => theme.colors.text.main + ""};
    width: 16px;
  }

  &:before {
    content: "";
    position: absolute;
    left: 4px;
    right: 4px;
    top: 1px;
    bottom: 1px;
    background-color: transparent;
    border-radius: ${({ theme }) => theme.variables.radius[4]};
    transition: background-color 0.08s;
  }

  & > ul {
    opacity: 0;
    transition: opacity 0.1s;
    pointer-events: none;
  }

  &:not([data-triangle="true"]):hover,
  &:not([data-triangle="true"])[data-hover="true"],
  &[data-triangle-handler="true"][data-hover="true"] {
    ${({ type, theme }) =>
      type !== "content" &&
      `&:before {
      background-color: ${theme.colors.box.filled[1] + ""};
    }`}

    & > ul {
      opacity: 1;
      pointer-events: all;
      transition: opacity 0s;
      transition-delay: 0.2s;
    }
  }
`;
