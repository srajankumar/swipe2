import React, { useRef, useState, useEffect } from "react";
import Plx from "react-plx";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { Scroll } from "framer";
const exampleParallaxData = [];

const style = {
  width: "100vw",
  height: "140vh",
  background: "#f3f3f3",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

const Card = motion.li;

const CardStyle = {
  background: "#fff",
  borderRadius: "8px",
  boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "30%",
  height: "250px",
  margin: "3%",
  userSelect: "none",
  color: "white"
};

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300
};

export const Drag = () => {
  const [cards, setCards] = useState(["tomato", "blue", "purple"]);
  const [preCards, setPreCards] = useState(["tomato", "blue", "purple"]);
  // @todo @hack
  const [middle, setMiddle] = useState("blue");
  const initalX = useMotionValue(0);
  const x = useMotionValue(0);
  const ref = useRef();
  const controls = useAnimation();
  controls.start({ x: -20 });

  useEffect(() => {
    // @todo @hack
    setMiddle(cards[1]);
  }, [cards]);

  return (
    <div style={{ position: "relative" }}>
      <Plx parallaxData={exampleParallaxData} style={style}>
        <h1
          style={{
            position: "absolute",
            top: 5,
            marginBottom: 20,
            transform: "translate(50, -50)"
          }}
        >
          Drag Example (WIP)
        </h1>

        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: 200,
            marginTop: "100px",
            x
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0}
          dragDirection
          onDrag={(v, { delta }) => {
            if (ref && ref.current) {
              if (delta.x < -20) {
                const first = cards.shift();
                setPreCards([...cards, first]);
              } else if (delta.x >= 20) {
                const pos = cards.length;
                const last = cards.splice(pos - 1, 1);
                setPreCards([...last, ...cards]);
              }
              x.set(initalX);
            }
          }}
          onDragEnd={() => {
            setCards(preCards);
          }}
        >
          {cards.map((c, i) => (
            <Card
              ref={ref}
              key={c}
              style={{ ...CardStyle, ...{ background: c } }}
              initial={{ scale: 0, opacity: 0.3 }}
              animate={{
                scale: c == middle ? 1.3 : 1,
                opacity: c == middle ? 1 : 0.3
              }}
              layoutPosition={spring}
            >
              {c}
            </Card>
          ))}
        </motion.div>

        <div style={{ display: "flex" }}>
          {cards.map((c, i) => (
            <motion.div
              style={{
                height: 10,
                width: 10,
                marginLeft: 5,
                marginRight: 5,
                borderRadius: "50%",
                background: c,
                marginTop: 100
              }}
            />
          ))}
        </div>
      </Plx>
    </div>
  );
};
