import React from "react";
import './background.css';
import daj from "./assets/daj.jpg";
import ji from "./assets/ji.jpeg";
import banji from "./assets/banji.jpg";
import xiaoji from "./assets/xiaoji.jpg";
import moji from "./assets/moji.jpg";
import xiong from "./assets/xiong.jpg";
import moxiaoji from "./assets/moxiaoji.jpg";

const Background = ({ title }) => {
  const backgroundMap = {
    大吉: daj,
    吉: ji,
    半吉: banji,
    小吉: xiaoji,
    末吉: moji,
    末小吉: moxiaoji,
    凶: xiong,
  };

  const backgroundImage = backgroundMap[title] || null;

  return (
    <div
      className="background-container"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
      }}
    ></div>
  );
};


export default Background;
