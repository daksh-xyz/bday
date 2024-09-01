// src/App.js

import React, { useState } from 'react';
import './App.css';
import CountdownTimer from './CountdownTimer';
import Hearts from './Hearts';
import Confetti from './confetti';

function App() {
  // State to determine whether to show confetti
  const [showConfetti, setShowConfetti] = useState(false);

  // Set the target date and time you want to count down to
  const targetDate = "2024-09-06T12:10:00";

  // Function to handle the end of the countdown
  const handleCountdownEnd = () => {
    setShowConfetti(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Pass handleCountdownEnd to CountdownTimer */}
        <CountdownTimer targetDate={targetDate} onCountdownEnd={handleCountdownEnd} />
      </header>
      {/* Only show Confetti when showConfetti is true */}
      {showConfetti && <Confetti />}
      <Hearts />
    </div>
  );
}

export default App;
