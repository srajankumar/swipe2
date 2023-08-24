import React from "react";
import Plx from "react-plx";

const exampleParallaxData = [
  {
    start: document.getElementById("blur"),
    end: "400vh",
    properties: [
      {
        startValue: 5,
        endValue: 0,
        property: "blur"
      }
    ]
  }
];

const style = {
  width: "100vw",
  height: "200vh",
  background: "tomato",
  display: "flex",
  flexDirection: "column",
  paddingTop: "40vh",
  alignItems: "center"
};

export const Blur = () => {
  return (
    <Plx id="blur" parallaxData={exampleParallaxData} style={style}>
      <h1 style={{ position: "sticky", top: "50%", bottom: "50%" }}>
        Blur Example
      </h1>
    </Plx>
  );
};
