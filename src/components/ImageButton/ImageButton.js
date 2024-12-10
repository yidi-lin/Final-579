import React, { useState } from 'react';
import './ImageButton.css';
import image1 from './image1.png';

const ImageButton = ({ onClick }) => {
  const [isShaking, setIsShaking] = useState(false);

  const handleClick = () => {
    setIsShaking(true); // Start shake animation
    setTimeout(() => {
      setIsShaking(false); // Stop shake animation after 3 seconds
      onClick(); // Trigger the fetch function after the delay
    }, 2000); // 3 seconds delay
  };

  return (
    <div className="image-button-container">
      <img
        src={image1}
        alt="Fortune Stick"
        className={`image-button ${isShaking ? 'shake' : ''}`}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageButton;

