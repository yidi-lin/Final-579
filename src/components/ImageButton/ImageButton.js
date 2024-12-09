import React from 'react';
import './ImageButton.css';
import image1 from './image1.png';



const ImageButton = ({ onClick }) => {
  return (
    <div className="image-button-container">
      <img
        src={image1}
        alt="Fortune Stick"
        className="image-button"
        onClick={onClick}
      />
    </div>
  );
};

export default ImageButton;
