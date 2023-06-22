import { useState } from "react";

interface PointerValues {
  isPressed: boolean;
  isHover: boolean;
}

const usePointerEvents = () => {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);

  const pointerEvents = {
    onPointerEnter: () => {
      setIsHover(true);
    },
    onPointerLeave: () => {
      setIsHover(false);
      setIsPressed(false);
    },
    onPointerDown: () => {
      setIsPressed(true);
    },
    onPointerUp: () => {
      setIsPressed(false);
    },
  };

  const pointerValues: PointerValues = {
    isPressed,
    isHover,
  };

  return { pointerEvents, pointerValues };
};

export default usePointerEvents;
