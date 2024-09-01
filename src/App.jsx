import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const videoID = "08Z461UVMOM";
  const arr = Array(50).fill(`https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1&loop=1&playlist=${videoID}&vq=small`);

  return (
    <div className="video-grid">
      {arr.map((link, index) => (
        <div key={index} className="video-container">
          <iframe
            width="100%"
            height="100%"
            src={link}
            title={`YouTube video player ${index}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}

export default App;
