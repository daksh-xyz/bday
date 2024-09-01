// src/CountdownTimer.js

import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ targetDate, onCountdownEnd }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const remainingTime = calculateTimeRemaining(targetDate);
      setTimeRemaining(remainingTime);

      // Check if the countdown has reached zero
      if (remainingTime.total <= 0) {
        clearInterval(intervalId);
        onCountdownEnd(); // Call the callback to notify that time is up
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate, onCountdownEnd]);

  function calculateTimeRemaining(targetDate) {
    const total = Date.parse(targetDate) - Date.now();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function formatTime(value) {
    return value < 10 ? `0${value}` : value; // Format to ensure two digits
  }

  const redirectToHtmlPage = () => {
    window.location.href = '../Cake.html';
  };

  if (timeRemaining.total <= 0) {
    return (
      <div className="bday-msg">
        Happy Birthday Janhvi{' '}
        <span className='myHeart'>
          <button className='redirect' onClick={redirectToHtmlPage}>❤️</button>
        </span>
      </div>
    );
  }

  return (
    <div className="countdown-timer">
      <div className="digits">{formatTime(timeRemaining.days)}</div>
      <div className="dots">:</div>
      <div className="digits">{formatTime(timeRemaining.hours)}</div>
      <div className="dots">:</div>
      <div className="digits">{formatTime(timeRemaining.minutes)}</div>
      <div className="dots">:</div>
      <div className="digits">{formatTime(timeRemaining.seconds)}</div>
    </div>
  );
};

export default CountdownTimer;
