// src/App.js

import React, { useState } from 'react';
import './App.css';
import CountdownTimer from './CountdownTimer';
import Hearts from './Hearts';
import Confetti from './confetti';
import Instructions from './Instructions';


function App() {
  // State to determine whether to show confetti
  const [showConfetti, setShowConfetti] = useState(false);

  // Set the target date and time you want to count down to
  const targetDate = "2024-09-01T23:29:59";

  // Function to handle the end of the countdown
  const handleCountdownEnd = () => {
    setShowConfetti(true);
  };

  return (
    <div className="App">
      <div className='InstructionDiv'><Instructions /></div>
      <header className="App-header">
        <CountdownTimer targetDate={targetDate} onCountdownEnd={handleCountdownEnd} />
      </header>
      {showConfetti && <Confetti />}
      <Hearts />
    </div>
  );
}

export default App;
