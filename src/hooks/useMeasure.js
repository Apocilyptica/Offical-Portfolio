import { useLayoutEffect, useRef, useState } from "react";

export const useMeasure = (deps) => {
  const [rect, setRect] = useState({});
  const myRef = useRef();
  const windowSize = {
    height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
    width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
  };

  useLayoutEffect(() => {
    setRect(myRef.current.getBoundingClientRect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [rect, myRef, windowSize];
};
