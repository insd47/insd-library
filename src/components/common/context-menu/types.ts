import type { IconType } from "@/.";

export type ItemType =
  | "seperator"
  | "content"
  | "action"
  | "parent"
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

export interface ParentItem extends Omit<ContentItem, "type"> {
  type: "parent";
  children: ContextMenuItem[];
}

export interface DescriptionItem {
  type: "description";
  description: string;
}

export type ContextMenuItem =
  | SeperatorItem
  | ContentItem
  | ActionItem
  | ParentItem
  | DescriptionItem;

export interface ContextMenuProps {
  items: ContextMenuItem[];
  x: number;
  y: number;
  onClose?: () => void;
  open: boolean;
  _childindex?: number;
}

export interface StyledContextMenuProps {
  x: number;
  y: number;
  childindex?: number;
  open: boolean;
}

export interface StyledItemProps {
  type: ItemType;
  childindex?: number;
}
