import * as motion from "motion/react-client";
import image1 from "../assets/SARKAR_JI/2.jpg";
import image3 from "../assets/SARKAR_JI/a6.jpg";
import image4 from "../assets/SARKAR_JI/4.jpg";
import image5 from "../assets/SARKAR_JI/5.jpg";
import image2 from "../assets/SARKAR_JI/a9.jpg";
import image6 from "../assets/SARKAR_JI/a3.jpg";
import image7 from "../assets/SARKAR_JI/a4.jpg";
import image8 from "../assets/SARKAR_JI/a8.jpg";
import { useEffect, useRef } from "react";
import audioFile1 from "../assets/audio/new.mp3";
import audioFile2 from "../assets/audio/second.m4a"; // <-- add your second file here

export default function ScrollTriggered() {
  const audio1 = useRef(null);
  const audio2 = useRef(null);

  useEffect(() => {
    audio1.current = new Audio(audioFile1);
    audio2.current = new Audio(audioFile2);

    // when first audio ends, play the second
    audio1.current.addEventListener("ended", () => {
      audio2.current.play().catch(() => {});
    });

    audio1.current.play().catch(() => {});

    return () => {
      audio1.current.pause();
      audio1.current.currentTime = 0;
      audio2.current.pause();
      audio2.current.currentTime = 0;
    };
  }, []);

  return (
    <div style={container}>
      {food.map(([imgSrc, hueA, hueB], i) => (
        <Card i={i} imgSrc={imgSrc} hueA={hueA} hueB={hueB} key={i} />
      ))}
    </div>
  );
}

function Card({ imgSrc, hueA, hueB, i }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div style={card} variants={cardVariants} className="card">
        <img
          src={imgSrc}
          alt={`card-${i}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

const cardVariants = {
  offscreen: { y: 300 },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

// Styles
const container = {
  margin: "0 auto",
  maxWidth: 500,
  paddingBottom: 100,
  width: "100%",
};

const cardContainer = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -120,
};

const splash = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card = {
  width: 300,
  height: 430,
  borderRadius: 20,
  background: "#f5f5f5",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  overflow: "hidden",
  transformOrigin: "10% 60%",
};

// Data
const food = [
  [image1, 340, 10],
  [image2, 20, 40],
  [image3, 60, 90],
  [image4, 80, 120],
  [image5, 100, 140],
  [image6, 205, 245],
  [image7, 260, 290],
  [image8, 290, 320],
];
