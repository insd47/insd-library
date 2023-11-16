import { useEffect, useState } from "react";

const useViewport = (refresh?: boolean) => {
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const setViewport = () => {
      setHeight(document.documentElement.clientHeight);
      setWidth(document.documentElement.clientWidth);
    };

    if (document.documentElement) setViewport();

    if (refresh || typeof refresh === "undefined")
      window.addEventListener("resize", setViewport);

    return window.removeEventListener("resize", setViewport);
  }, []);

  return [width, height];
};

export default useViewport;
