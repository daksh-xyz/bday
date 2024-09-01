// src/Hearts.js

import React from 'react';
import './Hearts.css';

const Hearts = () => {
  const heartsArray = Array.from({ length: 200 });

  return (
    <div className="hearts-container">
      {heartsArray.map((_, index) => (
        <div key={index} className="heart" style={generateRandomStyle()}>&hearts;</div>
      ))}
    </div>
  );
};

const generateRandomStyle = () => {
  const randomX = Math.floor(Math.random() * 100);
  const randomY = Math.floor(Math.random() * 100);
  const randomSize = Math.random() * 2 + 1; // Random size between 1 and 3
  const randomColor = `hsl(${Math.random() * 360}, 100%, 70%)`; // Random color

  return {
    position: 'absolute',
    top: `${randomY}%`,
    left: `${randomX}%`,
    fontSize: `${randomSize}rem`,
    color: randomColor,
    animation: `float ${Math.random() * 5 + 3}s infinite ease-in-out`
  };
};

export default Hearts;
