import React, { useState } from 'react';
import '../App.css'; // Corrected path to App.css
import ImageButton from './ImageButton/ImageButton'; // Corrected path to ImageButton
import FortuneDisplay from './FortuneDisplay/FortuneDisplay'; // Corrected path to FortuneDisplay


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
    <div className="app-container">
      <h1 className="main-title">Ancient Fortune Tell</h1>
      <p className="main-description">
        Click the image to reveal your fortune.
      </p>
      <ImageButton onClick={handleFetchFortune} />
      {fortune && <FortuneDisplay fortune={fortune} />}
    </div>
  );
};

export default Main;
