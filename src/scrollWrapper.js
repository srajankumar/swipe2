import React, { useState, useEffect, useRef } from "react";
import { useTransform, useViewportScroll } from "framer-motion";

export const ScrollWrapper = ({ children, onScroll }) => {
  const ref = useRef();
  const [offsetHeight, setOffsetHeight] = useState(0);
  const [elHeight, setElHeight] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const { scrollY, scrollYProgress } = useViewportScroll();
  const yPercentage = useTransform(
    scrollY,
    [offsetHeight, offsetHeight + elHeight],
    [0, 100]
  );

  useEffect(() => {
    if (ref && ref.current) {
      setOffsetHeight(ref.current.getBoundingClientRect().top);
      setElHeight(ref.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    yPercentage.onChange(v => onScroll(v));
  }, [yPercentage]);

  return <div ref={ref}>{children}</div>;
};
