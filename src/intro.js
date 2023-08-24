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
  height: "250vh",
  background: "#000",
  display: "flex",
  flexDirection: "column",
  // paddingTop: "40vh",
  alignItems: "center"
};

const H1 = motion.h1;

export const Intro = () => {
  const [scrubPercent, setScrubPercent] = useState(0);
  const handleScrub = (value) => {
    setScrubPercent(value);
  };

  return (
    <div>
      <ScrollWrapper onScroll={(v) => handleScrub(v)}>
        <Plx parallaxData={exampleParallaxData} style={style}>
          <div
            style={{
              position: "sticky",
              top: "20%",
              bottom: "10%",
              height: "80vh",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <H1
              initial={{ opacity: 0 }}
              animate={{ opacity: scrubPercent >= 10 ? 1 : 0 }}
              className="intro-text"
            >
              Welcome
            </H1>
            <H1
              initial={{ opacity: 0 }}
              animate={{ opacity: scrubPercent >= 20 ? 1 : 0 }}
              className="intro-text text-big"
            >
              To
            </H1>
            <H1
              initial={{ opacity: 0 }}
              animate={{ opacity: scrubPercent >= 30 ? 1 : 0 }}
              className="intro-text"
            >
              King Kong V
            </H1>
            <H1
              initial={{ opacity: 0 }}
              animate={{ opacity: scrubPercent >= 40 ? 1 : 0 }}
              className="intro-text text-big"
            >
              Only
            </H1>

            <H1
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: scrubPercent >= 55 ? 1 : 0,
                y: scrubPercent >= 55 ? 0 : 30
              }}
              className="intro-text"
            >
              The next generation <br />{" "}
              <span style={{ fontWeight: "800" }}>Escalade</span>
            </H1>
          </div>
        </Plx>
      </ScrollWrapper>
    </div>
  );
};
