import { useState, useLayoutEffect } from "react";

const useLayer = (id: string, index: number) => {
  const [hasLayer, setHasLayer] = useState(false);

  // create layer
  useLayoutEffect(() => {
    if (!document.getElementById(id)) {
      const layer = document.createElement("div");

      layer.classList.add("layer");
      layer.style.zIndex = index.toString();
      layer.id = id;

      document.body.appendChild(layer);
    }

    setHasLayer(true);
  }, []);

  return hasLayer;
};

export default useLayer;
