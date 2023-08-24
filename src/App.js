import React from "react";
import "./styles.css";
import { Intro } from "./intro";
import { Blur } from "./blur";
import { BlurImage } from "./blurImage";
import { Scrub } from "./scrub";
import { Lines } from "./lines";
import { Drag } from "./drag";
import { Interstitial } from "./interstitial";

export default function App() {
  return (
    <div className="App" style={{ height: "5000px" }}>
      <Intro />
      {/* <Blur /> */}
      <BlurImage />
      <Scrub />
      <Lines />
      <Drag />
      {/* <Interstitial /> */}
    </div>
  );
}
