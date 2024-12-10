import React, { useState } from "react";
import "./main.css";
import ImageButton from "./ImageButton/ImageButton";
import FortuneDisplay from "./FortuneDisplay/FortuneDisplay";
import Background from "./background/background"; // Adjust path accordingly

const Main = () => {
  const [fortune, setFortune] = useState(null);

  const handleFetchFortune = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/Tamshen/senso-ji-stick-data/master/data.zh.json"
      );
      const data = await response.json();
      const fortunes = data.qcs;
      const randomIndex = Math.floor(Math.random() * fortunes.length);
      const randomFortune = fortunes[randomIndex];
      setFortune({
        title: randomFortune[0] || "Unknown",
        interpretation: randomFortune[1] || "No interpretation available.",
      });
    } catch (error) {
      console.error("Error fetching fortune:", error);
      setFortune({
        title: "Error",
        interpretation: "Could not fetch your fortune. Please try again!",
      });
    }
  };

  return (
    <div className="main-container">
      <Background title={fortune?.title} />
      <div className="centered-box">
        <h1>Ancient Fortune Tell</h1>
        <p>Click the image to roll your fortune stick and reveal your destiny!</p>
        <ImageButton onClick={handleFetchFortune} />
        {fortune ? (
          <div className="answer-box">
            <FortuneDisplay fortune={fortune} />
          </div>
        ) : (
          <div className="placeholder">
            <h3>Your fortune will appear here...</h3>
          </div>
        )}
      </div>
    </div>
  );
};


export default Main;
