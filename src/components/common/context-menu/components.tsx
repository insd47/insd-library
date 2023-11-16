"use client";

import {
  ContentItem,
  ContextMenuItem,
  DescriptionItem,
  SubMenuItem,
  SubMenuProps,
} from "./types";
import {
  StyledContextMenu,
  StyledDescription,
  StyledItem,
  StyledSeperator,
} from "./styles";
import Icon from "../icon";
import CheckIcon from "@/components/input/boolean/icon";
import React, {
  HTMLAttributes,
  PropsWithChildren,
  forwardRef,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { OVERLAP_WIDTH, MIN_PADDING, TRIANGLE_DURATION } from "./constants";
import isPointInTriangle, { TriangleContext } from "./check";

const preventClose = (
  e: React.MouseEvent<HTMLLIElement | HTMLUListElement, MouseEvent>
) => e.stopPropagation();

const ContentItemFrame = forwardRef<
  HTMLLIElement,
  HTMLAttributes<HTMLLIElement> &
    PropsWithChildren<
      Omit<ContentItem, "type"> & {
        onClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
        type: "content" | "action" | "submenu";
      }
    >
>(
  (
    { children, icon, iconColor, name, color, type, onClick, ...props },
    ref
  ) => {
    const [isTriangle] = useContext(TriangleContext);

    return (
      <StyledItem
        ref={ref}
        type={type}
        onClick={onClick ?? preventClose}
        data-triangle={isTriangle}
        {...props}
      >
        <Icon type={icon} color={iconColor ?? color} size={16} />
        <p style={{ color }}>{name}</p>
        {children}
      </StyledItem>
    );
  }
);

const SubMenuContainer: React.FC<
  SubMenuItem & {
    isVisible: boolean;
  }
> = ({ items, isVisible, width, ...props }) => {
  const subMenuRef = useRef<HTMLUListElement>(null);
  const itemRef = useRef<HTMLLIElement>(null);
  const mouseRef = useRef<MouseEvent>();
  const trianbleTimeoutRef = useRef<NodeJS.Timeout>();

  const [_, setIsTriangle] = useContext(TriangleContext);

  const [isLeft, setIsLeft] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isTriangleHolder, setIsTriangleHolder] = useState(false);
  const [boundary, setBoundary] = useState({
    x: 0,
    y: 0,
  });

  const [childIsTriangle, setChildIsTriangle] = useState(false);

  // compensate for overflow
  useLayoutEffect(() => {
    const subMenu = subMenuRef.current;
    const item = itemRef.current;

    if (subMenu && item) {
      const itemRect = item.getBoundingClientRect();
      const subMenuRect = subMenu.getBoundingClientRect();

      const xOverflow = Math.max(
        itemRect.x +
          itemRect.width +
          subMenuRect.width -
          OVERLAP_WIDTH -
          (window.innerWidth - MIN_PADDING),
        0
      );

      const yOverflow = Math.max(
        itemRect.y + subMenuRect.height - (window.innerHeight - MIN_PADDING),
        0
      );

      if (
        xOverflow > 0 &&
        itemRect.x - subMenuRect.width + OVERLAP_WIDTH > MIN_PADDING
      ) {
        setIsLeft(true);
        return;
      }

      setIsLeft(false);

      setBoundary({
        x: xOverflow,
        y: yOverflow,
      });
    }
  }, [isVisible]);

  // decide visibility
  useEffect(() => {
    const box = subMenuRef.current?.getBoundingClientRect();
    if (!box) return;

    const checker = (e: MouseEvent) => {
      if (isHover) {
        const isInside =
          itemRef.current?.contains(e.target as Node) ||
          subMenuRef.current?.contains(e.target as Node);

        const parentElement = itemRef.current?.parentElement;
        const isInsideParent = parentElement?.contains(e.target as Node);

        const isInsideTriangle = () => {
          let boxX = box.x;
          if (e.clientX > box.x + box.width) boxX += box.width;
          if (!mouseRef.current) return false;

          return isPointInTriangle(
            [e.clientX, e.clientY],
            [boxX, box.y],
            [boxX, box.y + box.height],
            [mouseRef.current.clientX, mouseRef.current.clientY]
          );
        };

        if (!isInside && isInsideParent) {
          const makeOff = () => {
            setIsHover(false);
            setIsTriangle(false);
            setIsTriangleHolder(false);
          };

          if (isInsideTriangle()) {
            setIsTriangle(true);
            setIsTriangleHolder(true);

            trianbleTimeoutRef.current = setTimeout(
              () => makeOff(),
              TRIANGLE_DURATION
            );
          } else makeOff();
        }

        mouseRef.current = e;
      }
    };

    window.addEventListener("mousemove", checker);
    return () => window.removeEventListener("mousemove", checker);
  }, [isVisible, isHover]);

  return (
    <ContentItemFrame
      ref={itemRef}
      data-hover={isHover}
      data-triangle-handler={isTriangleHolder}
      onClick={(e) => {
        // SubMenu에서 전파된 이벤트면 전파 허용
        if (subMenuRef.current?.contains(e.target as Node)) return;
        e.stopPropagation();
      }}
      onPointerEnter={() => setIsHover(true)}
      {...props}
    >
      <Icon type="arrow-2-right" size={16} />
      <TriangleContext.Provider value={[childIsTriangle, setChildIsTriangle]}>
        <SubMenu
          boundary={boundary}
          ref={subMenuRef}
          items={items}
          isLeft={isLeft}
          isVisible={isVisible}
          width={width}
        />
      </TriangleContext.Provider>
    </ContentItemFrame>
  );
};

const SubMenu = forwardRef<HTMLUListElement, SubMenuProps>(
  ({ boundary, items, isLeft, isVisible, width }, ref) => {
    return (
      <StyledContextMenu
        type="sub-menu"
        boundary={boundary}
        isLeft={isLeft}
        ref={ref}
        width={width}
      >
        {createItems(items, isVisible)}
      </StyledContextMenu>
    );
  }
);

export const createItems = (items: ContextMenuItem[], isVisible: boolean) =>
  items.map((item, index) => {
    switch (item.type) {
      case "seperator":
        return <StyledSeperator key={index} onClick={preventClose} />;
      case "description":
        return (
          <StyledDescription key={index} onClick={preventClose}>
            {(item as DescriptionItem).description}
          </StyledDescription>
        );
      case "content":
        return <ContentItemFrame key={index} {...item} />;
      case "action":
        return (
          <ContentItemFrame
            key={index}
            onClick={(e) => item.onClick?.(e)}
            {...item}
          >
            {item.checked && <CheckIcon />}
          </ContentItemFrame>
        );
      case "submenu":
        return <SubMenuContainer isVisible={isVisible} key={index} {...item} />;
    }
  });
