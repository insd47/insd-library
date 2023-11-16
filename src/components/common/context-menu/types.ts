import type { IconType } from "../icon/fonts/types";

export type ItemType =
  | "seperator"
  | "content"
  | "action"
  | "submenu"
  | "description";

export interface SeperatorItem {
  type: "seperator";
}

export interface ContentItem {
  type: "content";
  name: string;
  icon?: IconType;
  color?: string;
  iconColor?: string;
  disabled?: boolean;
}

export interface ActionItem extends Omit<ContentItem, "type"> {
  type: "action";
  checked?: boolean;
  onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

export interface SubMenuItem extends Omit<ContentItem, "type"> {
  type: "submenu";
  width?: number;
  items: ContextMenuItem[];
}

export interface DescriptionItem {
  type: "description";
  description: string;
}

export type ContextMenuItem =
  | SeperatorItem
  | ContentItem
  | ActionItem
  | SubMenuItem
  | DescriptionItem;

export interface ContextMenuProps {
  items: ContextMenuItem[];
  x: number;
  y: number;
  width?: number;
  onClose?: () => void;
  open: boolean;
}

export interface StyledContextMenuProps {
  type: "context-menu";
  x: number;
  y: number;
  width?: number;
  open: boolean;
}

export interface SubMenuProps {
  items: ContextMenuItem[];
  isLeft: boolean;
  width?: number;
  isVisible: boolean;
  boundary: {
    x: number;
    y: number;
  };
}

export interface StyledSubMenuProps {
  type: "sub-menu";
  isLeft: boolean;
  width?: number;
  boundary: {
    x: number;
    y: number;
  };
}

export interface StyledItemProps {
  type: ItemType;
}
