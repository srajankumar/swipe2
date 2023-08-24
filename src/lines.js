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
  background: "#000",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
};

const Line = motion.div;
const LineStyles = {
  position: "absolute",
  top: 20,
  left: 0,
  background:
    "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5256477591036415) 83%, rgba(255,255,255,0) 100%)",
  width: 20,
  maxHeight: "150vh"
};

export const Lines = () => {
  const [scrubPercent, setScrubPercent] = useState(0);
  const text = [..."scrub"];

  const handleScrub = value => {
    setScrubPercent(value);
  };

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <ScrollWrapper onScroll={v => handleScrub(v)}>
        <Plx parallaxData={exampleParallaxData} style={style}>
          <Line
            style={LineStyles}
            initial={{ x: 30, height: "0vh" }}
            animate={{ height: `calc(60vh + ${scrubPercent * 2.2}%` }}
          />
          <Line
            style={LineStyles}
            initial={{ x: 60, height: "0vh" }}
            animate={{ height: `calc(30vh + ${scrubPercent * 2.2}%` }}
          />
          <Line
            style={LineStyles}
            initial={{ x: 90, height: "0vh" }}
            animate={{ height: `calc(15vh + ${scrubPercent * 2}%` }}
          />
          <h1 style={{ position: "sticky", right: 10, top: 10, color: "#fff" }}>
            Lines
          </h1>
        </Plx>
      </ScrollWrapper>
    </div>
  );
};
