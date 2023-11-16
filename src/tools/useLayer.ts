import { MutableRefObject, useLayoutEffect, useRef, useState } from "react";

const useLayer = (
  id: string,
  index: number
): [boolean, MutableRefObject<HTMLElement | null>] => {
  const ref = useRef<HTMLElement | null>(null);
  const [hasLayer, setHasLayer] = useState(false);

  // create layer
  useLayoutEffect(() => {
    ref.current = document.getElementById(id);

    if (!ref.current) {
      ref.current = document.createElement("div");

      ref.current.classList.add("layer");
      ref.current.style.zIndex = index.toString();
      ref.current.id = id;

      document.body.appendChild(ref.current);
    }

    setHasLayer(true);
  }, []);

  return [hasLayer, ref];
};

export default useLayer;
