import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { formatTime } from './Utils.ts';
import { useTimerContext } from './TimerContext.tsx';

const CountdownInput = () => {
  const { isRunning, time, totalTime, setIsRunning, setProgress, setTotalTime, setTime } = useTimerContext();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTime((prev) => {
          if (prev > 0) {
            setProgress(Math.round(((prev-1) / totalTime) * 10000) / 100);
            return prev - 1;
          } else {
            clearInterval(interval);
            return 0;
          }
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning, time]);

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { value } = e.target;
  const [minutes, seconds] = value.split(':').map(Number);

  if (!isNaN(minutes) && !isNaN(seconds)) {
    const totalSeconds = minutes * 60 + seconds;
    setTotalTime(totalSeconds);
    setTime(Math.max(0, Math.min(600, totalSeconds)));
    setProgress(100);
  }
};

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inputRef.current) {
        inputRef.current.blur();
      }
    }

    if (e.key === ' ') {
      e.preventDefault();
      setIsRunning(!isRunning);
    }

    const adjustTime = (amount: number) => {
      setTime((prevTime) => {
        const newTime = Math.max(0, Math.min(600, prevTime + amount));
        setTotalTime(newTime);
        setProgress(Math.round((newTime / 600) * 10000) / 100);
        return newTime;
      });
    };

    if (e.key === 'ArrowUp') {
      adjustTime(1); // Increase by 1 second
    } else if (e.key === 'ArrowDown') {
      adjustTime(-1); // Decrease by 1 second
    } else if (e.key === 'ArrowLeft') {
      adjustTime(-60); // Decrease by 1 minute
    } else if (e.key === 'ArrowRight') {
      adjustTime(60); // Increase by 1 minute
    }
  };

  return (
    <div>
      <TimeDisplay
        type="text"
        value={formatTime(time)}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        maxLength={5}
        pattern="\d{1,2}:\d{2}"
        ref={inputRef}
        placeholder="MM:SS"
      />
    </div>
  );
};

export default CountdownInput;

const TimeDisplay = styled.input`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -90%);
  color: white;
  font-size: 2rem;
  text-align: center;
  background: transparent;
  border: none;
  z-index: 2;
  width: 100px;
  &:focus {
    outline: none;
  }
  &::-webkit-clear-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    -ms-appearance: none;
    appearance: none;
    margin: -10px;
  }
  &::-webkit-datetime-edit-ampm-field {
    display: none;
  }
  &::-webkit-calendar-picker-indicator {
    background: none;
  }
`;
