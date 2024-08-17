import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const arr = Array(50).fill("https://www.youtube.com/embed/gYkTU3UdHus?autoplay=1&mute=1"); 
  
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
