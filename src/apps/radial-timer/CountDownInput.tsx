import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { formatTime } from './Utils.ts';
import { useTimerContext } from './TimerContext.tsx';

const CountdownInput = () => {
  const [isEditing, setIsEditing] = useState(false);
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
  console.log('value', value);
  // const [minutes, seconds] = value.split(':').map(Number);

  console.log(!isNaN(+value));
  if (!isNaN(+value)) {
    // const totalSeconds = minutes * 60 + seconds;
    setTotalTime(+value);
    setTime(Math.max(0, Math.min(600, +value)));
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
  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsEditing(true);
  }
  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsEditing(false);
  }
  return (
    <div>
      <TimeDisplay
        type="text"
        value={isEditing ? time : formatTime(time)}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onKeyDown={handleKeyDown}
        maxLength={5}
        pattern="\d{1,2}:\d{2}"
        ref={inputRef}
        placeholder="MM:SS"
      />
      <EditingMessage>
      {isEditing && <span>Enter Time In Seconds</span>}

      </EditingMessage>
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

const EditingMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  color: white;
  font-size: 1rem;
  text-align: center;
  background: transparent;
  border: none;
  z-index: 2;
  width: 100px;
`