import { useLayoutEffect, useRef } from "react";

const useLayer = (id: string, index: number) => {
  const ref = useRef<HTMLElement | null>(null);

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
  }, []);

  return ref;
};

export default useLayer;
