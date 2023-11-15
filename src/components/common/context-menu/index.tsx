import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useState,
  useEffect,
  JSXElementConstructor,
} from "react";
import { StyledContextMenu } from "./styles";

import { ContextMenuProps } from "./types";
import { createPortal } from "react-dom";

import LazyMount from "../lazy-mount";
import { useLayer } from "@/tools";

import {
  LAYER_INDEX,
  RENDER_DELAY,
  TRANSITION_DURATION,
  MIN_PADDING,
  LAYER_NAME,
} from "./constants";
import { createItems } from "./components";

import { TriangleContext } from "./check";

const ContextMenu = forwardRef<HTMLUListElement, ContextMenuProps>(
  ({ items, x: initialX, y: initialY, onClose, open, ...props }, ref) => {
    const [pos, setPos] = useState({ x: initialX, y: initialY });
    const [isTriangle, setIsTriangle] = useState(false);

    const contextRef = useRef<HTMLUListElement>(null);
    useImperativeHandle(ref, () => contextRef.current as HTMLUListElement);

    // create layer
    const hasLayer = useLayer(LAYER_NAME, LAYER_INDEX);

    // set position
    const setPosition = () => {
      if (contextRef.current) {
        const { width, height } = contextRef.current.getBoundingClientRect();
        const { innerWidth, innerHeight } = window;

        const x = Math.min(initialX, innerWidth - width - MIN_PADDING);
        const y = Math.min(initialY, innerHeight - height - MIN_PADDING);

        setPos({ x, y });
      }
    };

    // check click outside
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const { target } = e;
      const node = contextRef.current;

      if (node && !node.contains(target as Node)) onClose?.();
    };

    const layer = document.getElementById(LAYER_NAME);
    const elementBuilder = (visible: boolean) => (
      <TriangleContext.Provider value={[isTriangle, setIsTriangle]}>
        <StyledContextMenu
          type="context-menu"
          {...pos}
          ref={contextRef}
          open={visible}
          onClick={() => onClose?.()}
          {...props}
        >
          {createItems(items, visible)}
        </StyledContextMenu>
      </TriangleContext.Provider>
    );

    return hasLayer && layer
      ? (createPortal(
          <LazyMount
            enabled={open}
            renderDelay={RENDER_DELAY}
            transitionDuration={TRANSITION_DURATION}
            onMount={() => {
              setPosition();
              if (open) {
                window.addEventListener("click", handleClickOutside);
                window.addEventListener("touchstart", handleClickOutside);
                window.addEventListener("resize", () => onClose?.());
                window.addEventListener("blur", () => onClose?.());
                window.addEventListener("wheel", () => onClose?.());
              }
            }}
            onUnmount={() => {
              window.removeEventListener("click", handleClickOutside);
              window.removeEventListener("touchstart", handleClickOutside);
              window.removeEventListener("resize", () => onClose?.());
              window.removeEventListener("wheel", () => onClose?.());
              window.removeEventListener("blur", () => onClose?.());
              setIsTriangle(false);
            }}
            builder={elementBuilder}
          />,
          layer
        ) as React.ReactElement<any, string | JSXElementConstructor<any>>)
      : null;
  }
);

export type { ContextMenuItem } from "./types";
export default ContextMenu;
