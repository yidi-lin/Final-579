import React, { useState } from 'react';
import './main.css';
import ImageButton from './ImageButton/ImageButton';
import FortuneDisplay from './FortuneDisplay/FortuneDisplay';

const Main = () => {
  const [fortune, setFortune] = useState(null);

  const handleFetchFortune = async () => {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/Tamshen/senso-ji-stick-data/master/data.zh.json'
      );
      const data = await response.json();
      const fortunes = data.qcs;
      const randomIndex = Math.floor(Math.random() * fortunes.length);
      const randomFortune = fortunes[randomIndex];
      setFortune({
        title: randomFortune[0] || 'Unknown',
        interpretation: randomFortune[1] || 'No interpretation available.',
      });
    } catch (error) {
      console.error('Error fetching fortune:', error);
      setFortune({
        title: 'Error',
        interpretation: 'Could not fetch your fortune. Please try again!',
      });
    }
  };

  return (
    <div className="main-container">
      {/* Title Section */}
      <header className="main-header">
        <h1>Ancient Fortune Tell</h1>
        <p>Click the image to roll your fortune stick and reveal your destiny!</p>
      </header>

      {/* Two-column Layout */}
      <div className="main-content">
        <div className="left">
          <ImageButton onClick={handleFetchFortune} />
        </div>
        <div className="right">
          {fortune ? (
            <FortuneDisplay fortune={fortune} />
          ) : (
            <div className="placeholder">
              <h3>Your fortune will appear here...</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
