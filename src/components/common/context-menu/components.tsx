import {
  ActionItem,
  ContentItem,
  ContextMenuItem,
  DescriptionItem,
  SubMenuItem,
  SeperatorItem,
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
import {
  PropsWithChildren,
  ReactElement,
  forwardRef,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { OVERLAP_WIDTH, MIN_PADDING } from "./constants";

const preventClose = (
  e: React.MouseEvent<HTMLLIElement | HTMLUListElement, MouseEvent>
) => e.stopPropagation();

const ContentItemFrame = forwardRef<
  HTMLLIElement,
  PropsWithChildren<
    Omit<ContentItem, "type"> & {
      onClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
      type: "content" | "action" | "submenu";
    }
  >
>(({ children, icon, iconColor, name, color, type, onClick }) => {
  return (
    <StyledItem type={type} onClick={onClick ?? preventClose}>
      <Icon type={icon} color={iconColor ?? color} size={16} />
      <p style={{ color }}>{name}</p>
      {children}
    </StyledItem>
  );
});

const SubMenuContainer: React.FC<SubMenuItem> = ({ items, ...props }) => {
  const subMenuRef = useRef<HTMLUListElement>(null);
  const itemRef = useRef<HTMLLIElement>(null);

  const [isLeft, setIsLeft] = useState(false);
  const [boundary, setBoundary] = useState({
    x: 0,
    y: 0,
  });

  useLayoutEffect(() => {
    const subMenu = subMenuRef.current;
    const item = itemRef.current;

    if (subMenu && item) {
      const itemRect = item.getBoundingClientRect();
      const subMenuRect = subMenu.getBoundingClientRect();

      const xOverflow = Math.min(
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

      setIsLeft(
        xOverflow > 0 &&
          itemRect.x - subMenuRect.width + OVERLAP_WIDTH > MIN_PADDING
      );

      setBoundary({
        x: xOverflow,
        y: yOverflow,
      });
    }
  }, []);

  return (
    <ContentItemFrame ref={itemRef} {...props}>
      <Icon type="arrow-2-right" size={16} />
      <SubMenu
        boundary={boundary}
        ref={subMenuRef}
        items={items}
        isLeft={isLeft}
      />
    </ContentItemFrame>
  );
};

const SubMenu = forwardRef<HTMLUListElement, SubMenuProps>(
  ({ boundary, items, isLeft }, ref) => {
    return (
      <StyledContextMenu
        type="sub-menu"
        boundary={boundary}
        isLeft={isLeft}
        ref={ref}
      >
        {createItems(items)}
      </StyledContextMenu>
    );
  }
);

export const createItems = (items: ContextMenuItem[]) =>
  items.map((item, index) => {
    switch (item.type) {
      case "seperator":
        return <StyledSeperator onClick={preventClose} key={index} />;
      case "description":
        return (
          <StyledDescription onClick={preventClose} key={index}>
            {(item as DescriptionItem).description}
          </StyledDescription>
        );
      case "content":
        return <ContentItemFrame key={index} {...item} />;
      case "action":
        return (
          <ContentItemFrame onClick={(e) => item.onClick?.(e)} {...item}>
            {item.checked && <CheckIcon />}
          </ContentItemFrame>
        );
      case "submenu":
        return <SubMenuContainer key={index} {...item} />;
    }
  });
