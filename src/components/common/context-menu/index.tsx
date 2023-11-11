import {
  forwardRef,
  useRef,
  useImperativeHandle,
  useState,
  useEffect,
  JSXElementConstructor,
} from "react";
import {
  StyledContextMenu,
  StyledDescription,
  StyledSeperator,
} from "./styles";
import Icon from "../icon";
import { StyledItem } from "./styles";
import {
  ActionItem,
  ContentItem,
  DescriptionItem,
  ParentItem,
  ContextMenuProps,
  ContextMenuItem,
} from "./types";
import { createPortal } from "react-dom";

import LazyMount from "../lazy-mount";
import CheckIcon from "@/components/input/boolean/icon";
import { useLayer } from "@/tools";

const LAYER_INDEX = 201;
const RENDER_DELAY = 10;
const TRANSITION_DURATION = 200;
const MIN_PADDING = 10;
const PADDING_TOP = 3;
const LAYER_NAME = "_layer-context-menu";

const ContextMenu = forwardRef<HTMLUListElement, ContextMenuProps>(
  (
    {
      items,
      x: initialX,
      y: initialY,
      onClose,
      open,
      _childindex = 0,
      ...props
    },
    ref
  ) => {
    const [pos, setPos] = useState({ x: initialX, y: initialY });

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

    useEffect(() => {
      if (_childindex > 0) setPosition();
    }, [open]);

    // check click outside
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (contextRef.current && !contextRef.current.contains(target)) {
        onClose?.();
      }
    };

    // check window blur
    useEffect(() => {
      const handleWindowBlur = () => {
        onClose?.();
      };

      window.addEventListener("blur", handleWindowBlur);

      return () => {
        window.removeEventListener("blur", handleWindowBlur);
      };
    }, []);

    const layer = document.getElementById(LAYER_NAME);
    const elementBuilder = (visible: boolean) => (
      <StyledContextMenu
        {...pos}
        childindex={_childindex}
        ref={contextRef}
        open={visible}
        {...props}
      >
        {items.map((item, i) => (
          <Item
            key={i}
            onClose={onClose}
            childindex={_childindex}
            isVisible={visible}
            {...item}
          />
        ))}
      </StyledContextMenu>
    );

    return (hasLayer || _childindex > 0) && layer
      ? (createPortal(
          _childindex > 0 ? (
            elementBuilder(open)
          ) : (
            <LazyMount
              enabled={open}
              renderDelay={RENDER_DELAY}
              transitionDuration={TRANSITION_DURATION}
              onMount={() => {
                setPosition();
                if (open) {
                  window.addEventListener("click", handleClickOutside);
                }
              }}
              onUnmount={() => {
                window.removeEventListener("click", handleClickOutside);
              }}
              builder={elementBuilder}
            />
          ),
          layer
        ) as React.ReactElement<any, string | JSXElementConstructor<any>>)
      : null;
  }
);

const Item: React.FC<
  ContextMenuItem & {
    childindex?: number;
    onClose?: () => void;
    isVisible?: boolean;
  }
> = ({ type, childindex, onClose, ...props }) => {
  if (type === "seperator") {
    return <StyledSeperator />;
  }

  if (type === "description") {
    const { description } = props as DescriptionItem;

    return <StyledDescription>{description}</StyledDescription>;
  }

  const { icon, iconColor, name, color } = props as ContentItem;

  return (
    <StyledItem
      type={type}
      onClick={(e) => {
        const { onClick } = props as ActionItem;
        if (onClick) {
          onClick?.(e);
          onClose?.();
        }
      }}
    >
      <Icon type={icon} color={iconColor ?? color} size={16} />
      <p style={{ color }}>{name}</p>
      {type === "parent" && (
        <ParentItemContainer
          childindex={childindex}
          items={(props as ParentItem).children}
          onClose={onClose}
          isVisible={!!props.isVisible}
        />
      )}
      {type === "action" && (props as ActionItem).checked && <CheckIcon />}
    </StyledItem>
  );
};

const ParentItemContainer: React.FC<{
  items: ContextMenuItem[];
  childindex?: number;
  onClose?: () => void;
  isVisible: boolean;
}> = ({ items, childindex, onClose, isVisible: isParentVisible }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const [hoverState, setHoverState] = useState({
    item: false,
    child: false,
  });

  const childRef = useRef<HTMLUListElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!childRef.current) return;
    if (!iconRef.current) return;

    const item = iconRef.current?.parentElement as HTMLLIElement;
    if (!item) return;

    item.addEventListener("pointerenter", () => {
      setHoverState((prev) => ({ ...prev, item: true }));
    });

    item.addEventListener("pointerleave", () => {
      setHoverState((prev) => ({ ...prev, item: false }));
    });

    childRef.current.addEventListener("pointerenter", () => {
      setHoverState((prev) => ({ ...prev, child: true }));
    });

    childRef.current.addEventListener("pointerleave", () => {
      setHoverState((prev) => ({ ...prev, child: false }));
    });

    const { innerWidth } = window;
    const { width } = childRef.current?.getBoundingClientRect();
    const { x, y, width: parentWidth } = item.getBoundingClientRect();

    if (x + parentWidth + width - 4 > innerWidth - MIN_PADDING) {
      setPos({ x: x - width + 4, y: y - PADDING_TOP });
    } else {
      setPos({ x: x + parentWidth - 4, y: y - PADDING_TOP });
    }

    // cleanup
    return () => {
      item.removeEventListener("pointerenter", () => {
        setHoverState((prev) => ({ ...prev, item: true }));
      });
      item.removeEventListener("pointerleave", () => {
        setHoverState((prev) => ({ ...prev, item: false }));
      });
      childRef.current?.removeEventListener("pointerenter", () => {
        setHoverState((prev) => ({ ...prev, child: true }));
      });
      childRef.current?.removeEventListener("pointerleave", () => {
        setHoverState((prev) => ({ ...prev, child: false }));
      });
    };
  }, [isParentVisible]);

  useEffect(() => {
    const item = iconRef.current?.parentElement as HTMLLIElement;
    if (hoverState.item || hoverState.child) {
      setIsVisible(true);
      item.setAttribute("data-hover", "true");
    } else {
      setIsVisible(false);
      item.removeAttribute("data-hover");
    }
  }, [hoverState]);

  return (
    <>
      <Icon ref={iconRef} type="arrow-2-right" size={16} />
      <ContextMenu
        ref={childRef}
        items={items}
        _childindex={childindex ? childindex + 1 : 1}
        open={isVisible && isParentVisible}
        onClose={onClose}
        {...pos}
      />
    </>
  );
};

export type { ContextMenuItem } from "./types";

export default ContextMenu;
