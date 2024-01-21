import React, { useState, useEffect } from 'react';
import './timerBar.css'; 
import { useNavigate  } from "react-router-dom";

const TimerBar = ({ durationInSeconds }) => {
  const [timeLeft, setTimeLeft] = useState(durationInSeconds);
  const navigate = useNavigate();
    // Logic for saving the user input
    const submitAnswers = () => {
        console.log('User answers submitted');
        navigate("/summary");
    }
    // Edit this logic

    useEffect(() => {
        const timerInterval = setInterval(() => {
          setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      
          if (timeLeft <= 0) {
            clearInterval(timerInterval);
            // Redirecting to the summary page and submitting answers
            submitAnswers();
          }
        }, 1000);
      
        return () => {
          clearInterval(timerInterval);
        };
      }, [submitAnswers]); 

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const progress = ((durationInSeconds - timeLeft) / durationInSeconds) * 100;

  return (
    <div className="timer-container">
      <div className="timer-bar" style={{ width: `${100 - progress}%` }}></div>
      <div className="timer-text">
        {`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
      </div>
    </div>
  );
};

export default TimerBar;

