"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { StyledTooltip } from "./styles";
import type { TooltipProps, Boundary } from "./types";
import { useLayer } from "../../../tools";

const TRANSITION_DURATION = 200;
const LAYER_INDEX = 202;
const RENDER_DELAY = 10;

const Tooltip: React.FC<TooltipProps> = ({
  position = "top",
  align = "center",
  parentRef,
  maxWidth,
  className,
  style,
  children,
  delay = 100,
  isHoverable = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [boundary, setBoundary] = useState<Boundary>({});
  const [limits, setLimits] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const [hovers, setHovers] = useState({
    parent: false,
    tooltip: false,
  });

  const tooltipRef = useRef<HTMLSpanElement>(null);
  const delayRef = useRef<NodeJS.Timeout | null>(null);
  const mountedRef = useRef<NodeJS.Timeout | null>(null);

  // layer declaration
  const [hasLayer, layerRef] = useLayer("__tooltip", LAYER_INDEX);

  // parent hover listener
  useLayoutEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;

    const handleMouseEnter = () =>
      setHovers((prev) => ({ ...prev, parent: true }));
    const handleMouseLeave = () =>
      setHovers((prev) => ({ ...prev, parent: false }));

    parent.addEventListener("mouseenter", handleMouseEnter);
    parent.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      parent.removeEventListener("mouseenter", handleMouseEnter);
      parent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // change state with hover
  useLayoutEffect(() => {
    if (Object.values(hovers).some((hover) => hover)) {
      if (delayRef.current) clearTimeout(delayRef.current);
      setIsMounted(true);
    } else {
      delayRef.current = setTimeout(() => setIsVisible(false), delay);
    }
  }, [hovers]);

  // set is visible
  useEffect(() => {
    if (isMounted) {
      mountedRef.current = setTimeout(() => setIsVisible(true), RENDER_DELAY);
    }
  }, [isMounted]);

  // set is mounted
  useLayoutEffect(() => {
    if (!isVisible) {
      mountedRef.current = setTimeout(
        () => setIsMounted(false),
        TRANSITION_DURATION
      );
    }
  }, [isVisible]);

  // resize listener
  useEffect(() => {
    const handleResize = () => {
      setIsVisible(false);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // scroll listener
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (e.deltaX !== 0 || e.deltaY !== 0) setIsVisible(false);
    };

    window.addEventListener("wheel", handleScroll);

    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  // calculate position
  useEffect(() => {
    if (isVisible) {
      setBoundary({});

      const parent = parentRef.current;

      const tooltip = tooltipRef.current;
      const layer = document.getElementById("_layer-tooltip");
      if (!parent || !tooltip || !layer) return;

      // get parent rect

      const parentRect = parent.getBoundingClientRect();
      const tooltipRect = tooltip.getBoundingClientRect();

      // set position

      const mainValue = {
        top: {
          key: "bottom",
          value: layer.clientHeight - parentRect.top,
        },
        right: {
          key: "left",
          value: parentRect.right,
        },
        bottom: {
          key: "top",
          value: parentRect.bottom,
        },
        left: {
          key: "right",
          value: layer.clientWidth - parentRect.left,
        },
      };

      if (position)
        setBoundary((prev) => ({
          ...prev,
          [mainValue[position].key]: mainValue[position].value,
        }));

      // set align

      let key: keyof Boundary;
      let size: "width" | "height";
      let windowSize: "clientWidth" | "clientHeight";
      let value: number = 0;

      if (position === "top" || position === "bottom") {
        key = "left";
        size = "width";
        windowSize = "clientWidth";
      } else {
        key = "top";
        size = "height";
        windowSize = "clientHeight";
      }

      switch (align) {
        case "start":
          value = parentRect[key];
          break;
        case "center":
          value =
            parentRect[key] + parentRect[size] / 2 - tooltipRect[size] / 2;
          break;
        case "end":
          key = key === "top" ? "bottom" : "right";
          value = layer[windowSize] - parentRect[key];
          break;
      }

      setBoundary((prev) => ({
        ...prev,
        [key]: value,
      }));

      // set limits
      const newTooltipRect = tooltip.getBoundingClientRect();
      const MIN_PADDING = 10;

      setLimits({
        y: layer.clientHeight - newTooltipRect.height - MIN_PADDING,
        x: layer.clientWidth - newTooltipRect.width - MIN_PADDING,
      });
    }
  }, [isVisible]);

  return hasLayer
    ? createPortal(
        <StyledTooltip
          ref={tooltipRef}
          className={className}
          position={position}
          style={style}
          boundary={boundary}
          maxWidth={maxWidth}
          isVisible={isVisible}
          isHoverable={isHoverable}
          limits={limits}
          onMouseEnter={() => setHovers((prev) => ({ ...prev, tooltip: true }))}
          onMouseLeave={() =>
            setHovers((prev) => ({ ...prev, tooltip: false }))
          }
          role="tooltip"
        >
          <div>{children}</div>
        </StyledTooltip>,
        layerRef.current!
      )
    : null;
};

export default Tooltip;
