import { useState } from "react";

interface PointerValues {
  isClicked: boolean;
  isHover: boolean;
}

const usePointerEvents = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);

  const pointerEvents = {
    onPointerEnter: () => {
      setIsHover(true);
    },
    onPointerLeave: () => {
      setIsHover(false);
      setIsClicked(false);
    },
    onPointerDown: () => {
      setIsClicked(true);
    },
    onPointerUp: () => {
      setIsClicked(false);
    },
  };

  const pointerValues: PointerValues = {
    isClicked,
    isHover,
  };

  return { pointerEvents, pointerValues };
};

export default usePointerEvents;
