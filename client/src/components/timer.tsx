import React, { useEffect, useState } from "react";

type TimerProps = {
  onTimeout: () => void;
  resetTimer: boolean; // New prop to signal when to reset the timer
};

const Timer: React.FC<TimerProps> = ({ onTimeout, resetTimer }) => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const handleCountdown = () => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        onTimeout();
        setTimer(30); // Reset timer for the next question
      }
    };

    const timerInterval: NodeJS.Timeout = setInterval(handleCountdown, 1000);

    return () => clearInterval(timerInterval);
  }, [timer, onTimeout]);

  // Use useEffect to reset the timer when resetTimer changes
  useEffect(() => {
    if (resetTimer) {
      setTimer(30);
    }
  }, [resetTimer]);

  return ( 
    <>
    <div className="text-right">
    <p>Time left:</p> 
    <p><span>{timer}</span> sec</p>
    </div>
    </>
  )
};

export default Timer;
