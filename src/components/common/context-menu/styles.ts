import styled from "@emotion/styled";
import { StyledContextMenuProps, StyledItemProps } from "./types";

export const StyledContextMenu = styled.ul<StyledContextMenuProps>`
  position: absolute;

  left: ${({ x }) => x + "px"};
  top: ${({ y }) => y + "px"};

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
  z-index: ${({ childindex }) => childindex};

  ${({ open }) => !open && "transition: opacity 0.15s;"}
  opacity: ${({ open }) => (open ? 1 : 0)};
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

  &:hover:before,
  &[data-hover="true"]:before {
    background-color: ${({ theme }) => theme.colors.box.filled[1] + ""};
  }
`;
