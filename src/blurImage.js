import React from "react";
import Plx from "react-plx";

const exampleParallaxData = [
  {
    start: "0vh", //document.getElementById("blurImage"), //"500vh",
    end: "400vh",
    properties: [
      {
        startValue: 45,
        endValue: 0,
        property: "blur"
      }
    ]
  }
];

const headingParalaxData = [
  {
    start: "0vh",
    end: "400vh",
    properties: [
      {
        startValue: "block",
        endValue: "none",
        property: "display"
      }
    ]
  }
];

export const BlurImage = () => {
  return (
    <div style={{ position: "relative" }}>
      <Plx
        style={{
          width: "80%",
          position: "absolute",
          top: "25%",
          marginLeft: "10%",
          textAlign: "center"
        }}
        parallaxData={headingParalaxData}
      >
        <h1 className="blur-text">SELECT YOUR PREFERRED ESCALEADE COLOR</h1>
      </Plx>
      <Plx
        id="blurImage"
        parallaxData={exampleParallaxData}
        className="blur-plx" /*style={style}*/
      >
        <div className="background-image" />
      </Plx>
    </div>
  );
};
