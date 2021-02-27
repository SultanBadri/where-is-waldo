import { useState, useEffect } from "react";

interface TimerProps {
  gameStarted: boolean;
  gameOver: boolean;
}

const Timer: React.FC<TimerProps> = ({ gameStarted, gameOver }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (!gameOver) {
      let interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setTimer(0);
    }
  }, [gameOver]);

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = Math.floor(timer / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return <h2 className="text-2xl">{formatTime()}</h2>;
};

export default Timer;
