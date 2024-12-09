import React, { useState } from "react";
import "./FortuneDisplay.css";
import { translateText } from "../helper";

const FortuneDisplay = ({ fortune }) => {
  const [translation, setTranslation] = useState(null); // To store the translation
  const [showTranslation, setShowTranslation] = useState(false); // To toggle translation visibility

  const handleTranslate = async () => {
    if (!fortune.interpretation) return;

    const translatedText = await translateText(fortune.interpretation);
    setTranslation(translatedText);
    setShowTranslation(true);
  };

  const handleHideTranslation = () => {
    setShowTranslation(false);
  };

  return (
    <div className="fortune-display">
      <h3>{fortune.title}</h3>
      <p>{fortune.interpretation}</p>

      {/* Translation button */}
      {!showTranslation && (
        <button className="translate-button" onClick={handleTranslate}>
          Translate to English
        </button>
      )}

      {/* Display translation */}
      {showTranslation && (
        <div className="translation">
          <p>{translation}</p>
          <button className="hide-button" onClick={handleHideTranslation}>
            Hide Translation
          </button>
        </div>
      )}
    </div>
  );
};

export default FortuneDisplay;
