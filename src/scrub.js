import React, { useState } from "react";
import Plx from "react-plx";
import { ScrollWrapper } from "./scrollWrapper";
import { motion } from "framer-motion";

const exampleParallaxData = [
  // {
  //   start: 0,
  //   end: "100vh",
  //   properties: [
  //     {
  //       startValue: 5,
  //       endValue: 0,
  //       property: "blur"
  //     }
  //   ]
  // }
];

const style = {
  width: "100vw",
  height: "150vh",
  background: "orange",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
};

export const Scrub = () => {
  const [scrubPercent, setScrubPercent] = useState(0);
  const text = [..."scrub"];

  const handleScrub = value => {
    setScrubPercent(value);
  };

  return (
    <ScrollWrapper onScroll={v => handleScrub(v)}>
      <Plx parallaxData={exampleParallaxData} style={style}>
        {text.map((t, i) => (
          <motion.h1
            style={{ display: "inline-block", position: "sticky", top: 0 }}
            initial={{ opacity: 0, y: 25 }}
            animate={{
              opacity: i * 18 >= scrubPercent ? 0 : 1,
              y: i * 18 >= scrubPercent ? 0 : 25
            }}
          >
            {t}
          </motion.h1>
        ))}
      </Plx>
    </ScrollWrapper>
  );
};
