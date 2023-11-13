import type { IconType } from "@/.";

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
  onClose?: () => void;
  open: boolean;
}

export interface StyledContextMenuProps {
  type: "context-menu";
  x: number;
  y: number;
  open: boolean;
}

export interface SubMenuProps {
  items: ContextMenuItem[];
  isLeft: boolean;
  boundary: {
    x: number;
    y: number;
  };
}

export interface StyledSubMenuProps {
  type: "sub-menu";
  isLeft: boolean;
  boundary: {
    x: number;
    y: number;
  };
}

export interface StyledItemProps {
  type: ItemType;
}
