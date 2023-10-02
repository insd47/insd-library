import { HTMLAttributes, PropsWithChildren } from "react";

type Position = "top" | "bottom" | "left" | "right";

export interface TooltipProps extends PropsWithChildren {
  position?: Position;
  align?: "start" | "center" | "end";
  parentRef: React.RefObject<HTMLElement>;
  maxWidth?: number;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  isHoverable?: boolean;
}

export interface StyledTooltipProps extends HTMLAttributes<HTMLSpanElement> {
  boundary: Boundary;
  maxWidth?: number;
  isVisible: boolean;
  position: Position;
  isHoverable: boolean;
  limits: { x: number; y: number };
}

export interface Boundary {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}
