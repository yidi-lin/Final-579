import React, { useState } from "react";
import "./FortuneDisplay.css";

const FortuneDisplay = ({ fortune }) => {
  const [translation, setTranslation] = useState(null); // To store the translation
  const [showTranslation, setShowTranslation] = useState(false); // To toggle translation visibility

  // Translate function (moved from helper.js)
  const translateText = async (text) => {
    try {
      const response = await fetch("http://localhost:5001/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify({
          text: text, // The text you want to translate
          targetLang: "en-GB", // Use British English
        }),
      });
  
      const data = await response.json();
      console.log("Translation:", data.translation);
      return data.translation;
    } catch (error) {
      console.error("Translation failed:", error);
      return "Translation failed. Please try again.";
    }
  };
  
  
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
