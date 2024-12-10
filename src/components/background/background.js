import React from "react";
import './background.css';
import daj from "/workspaces/Final-579/src/assets/daj.jpg";
import ji from "/workspaces/Final-579/src/assets/ji.jpeg";
import banji from "/workspaces/Final-579/src/assets/banji.jpg";
import xiaoji from "/workspaces/Final-579/src/assets/xiaoji.jpg";
import moji from "/workspaces/Final-579/src/assets/moji.jpg";
import xiong from "/workspaces/Final-579/src/assets/xiong.jpg";
import moxiaoji from "/workspaces/Final-579/src/assets/moxiaoji.jpg";

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
