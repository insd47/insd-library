import { useState, useEffect, useRef, useLayoutEffect } from "react";

interface LazyMountProps {
  enabled: boolean;
  builder: (visible: boolean) => JSX.Element;
  renderDelay?: number;
  transitionDuration?: number;
  onMount?: () => void;
  onUnmount?: () => void;
  onVisible?: () => void;
  onInvisible?: () => void;
}

const LazyMount: React.FC<LazyMountProps> = ({
  enabled,
  builder,
  renderDelay = 0,
  transitionDuration = 0,
  onMount,
  onUnmount,
  onVisible,
  onInvisible,
}) => {
  const [viewState, setViewState] = useState({
    mounted: false,
    visible: false,
  });

  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (enabled) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setViewState((prev) => ({ ...prev, mounted: true }));

      timeoutRef.current = setTimeout(() => {
        setViewState((prev) => ({ ...prev, visible: true }));
      }, renderDelay);
    } else {
      setViewState((prev) => ({ ...prev, visible: false }));

      timeoutRef.current = setTimeout(() => {
        setViewState((prev) => ({ ...prev, mounted: false }));
      }, transitionDuration);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [enabled]);

  useLayoutEffect(() => {
    if (viewState.mounted) {
      onMount?.();
    } else {
      onUnmount?.();
    }
  }, [viewState.mounted]);

  useLayoutEffect(() => {
    if (viewState.visible) {
      onVisible?.();
    } else {
      onInvisible?.();
    }
  }, [viewState.visible]);

  return viewState.mounted ? builder(viewState.visible) : null;
};

export default LazyMount;
