import React, { useState } from 'react';
import './FortuneDisplay.css';

const FortuneDisplay = ({ fortune }) => {
  const [translation, setTranslation] = useState(null); // To store the translation
  const [showTranslation, setShowTranslation] = useState(false); // To toggle translation visibility

  const handleTranslate = () => {
    // Mock translation function (replace with actual translation logic if needed)
    const mockTranslation = {
      title: 'Translation of ' + fortune.title,
      interpretation: 'This is the English translation of the fortune: ' + fortune.interpretation,
    };
    setTranslation(mockTranslation);
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
          <h4>{translation.title}</h4>
          <p>{translation.interpretation}</p>
          <button className="hide-button" onClick={handleHideTranslation}>
            Hide Translation
          </button>
        </div>
      )}
    </div>
  );
};

export default FortuneDisplay;
