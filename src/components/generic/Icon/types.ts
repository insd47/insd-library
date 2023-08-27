import { CSSProperties, HTMLAttributes } from "react";

export type IconType =
  | "bell-d-f"
  | "bell-d"
  | "mail-f"
  | "mail"
  | "arrow-1-down"
  | "arrow-1-left"
  | "arrow-1-right"
  | "arrow-1-up"
  | "arrow-2-down"
  | "arrow-2-left"
  | "arrow-2-right"
  | "arrow-2-up"
  | "bell-f"
  | "bell"
  | "bookmark-f"
  | "bookmark"
  | "bulb-f"
  | "bulb"
  | "clock-f"
  | "clock"
  | "comment-f"
  | "comment"
  | "complete"
  | "duplicate"
  | "exit"
  | "expand-a1"
  | "expand-a2"
  | "expand-d1"
  | "expand-d2"
  | "expand-h"
  | "expand-v"
  | "eye-f"
  | "eye"
  | "fan-f"
  | "fan"
  | "filter"
  | "grid"
  | "hamburger"
  | "heart-f"
  | "heart"
  | "home-f"
  | "home"
  | "link"
  | "list"
  | "locked-f"
  | "locked"
  | "login"
  | "logout"
  | "minus"
  | "moon-f"
  | "moon"
  | "more"
  | "pen-f"
  | "pen"
  | "photo-f"
  | "photo"
  | "pin-f"
  | "pin"
  | "plus"
  | "pos-f"
  | "pos"
  | "reload"
  | "save"
  | "search"
  | "send-f"
  | "send"
  | "setting-f"
  | "setting"
  | "share"
  | "shrink-a1"
  | "shrink-a2"
  | "shrink-d1"
  | "shrink-d2"
  | "shrink-h"
  | "shrink-v"
  | "star-f"
  | "star"
  | "sun-f"
  | "sun"
  | "tag-f"
  | "tag"
  | "unlocked-f"
  | "unlocked"
  | "upload"
  | "user-f"
  | "user"
  | "trash"
  | "trash-f"
  | "folder"
  | "folder-f";

interface CommonProps extends HTMLAttributes<HTMLDivElement> {}

export interface IconProps extends CommonProps {
  type?: IconType;
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  right?: CSSProperties["marginRight"];
  disabled?: boolean;
  pressable?: boolean;
  action?: () => void;
  size?: number;
}

export interface StyledIconProps extends CommonProps {
  CSSValues?: CSSProperties;
  size: number;
}

export interface StyledIconButtonProps {
  pressable?: boolean;
  isHover?: boolean;
  isPressed?: boolean;
  size: number;
}
