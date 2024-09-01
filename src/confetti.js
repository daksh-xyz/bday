// src/Confetti.js
import React, { useEffect, useState } from "react";
import "./confetti.css";

const Confetti = () => {
  const [confettiPieces, setConfettiPieces] = useState([]);

  useEffect(() => {
    // Generate confetti pieces
    const pieces = [];
    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: i,
        left: Math.random() * 100 + "vw",
        // animationDelay: Math.random() * 2 + "s",
        animationDuration: Math.random() * 3 + 2 + "s",
      });
    }
    setConfettiPieces(pieces);
  }, []);

  return (
    <div className="confetti-container">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            left: piece.left,
            animationDelay: piece.animationDelay,
            animationDuration: piece.animationDuration,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Confetti;
