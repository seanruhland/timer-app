import React from 'react';
import styled from 'styled-components';
import { FiPlay, FiPause } from 'react-icons/fi'; // Icon imports
import { useTimerContext } from './TimerContext.tsx';

const ControlButtons = () => {
  const { isRunning, setIsRunning, setProgress, setTotalTime, setTime } = useTimerContext();

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTime(60);
    setTotalTime(60);
    setProgress(100);
    setIsRunning(false);
  };

  const handleAddMinute = () => {
    setTime((prev) => Math.min(prev + 60, 600)); // Add one minute, max 10 minutes
    setTotalTime((prev) => Math.min(prev + 60, 600)); // Adjust total time accordingly
    setProgress((prevProgress) => Math.min(prevProgress + 10, 100)); // Adjust progress accordingly
  };

  return (
    <Controls>
      <ControlButton onClick={handleAddMinute}>+1:00</ControlButton>
      <IconButton onClick={handleStartPause}>
        {isRunning ? (
          <FiPause data-testid="start-buttons" size={24} />
        ) : (
          <FiPlay data-testid="start-buttons" size={24} />
        )}
      </IconButton>
      <ControlButton onClick={handleReset}>Reset</ControlButton>
    </Controls>
  );
};

export default ControlButtons;

const Controls = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

const ControlButton = styled.button`
  background-color: #263238;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 4px 8px;
  font-size: 16px;
  flex: 1;
  margin: 0 6px;

  &:hover {
    background-color: #2f4858;
  }
`;

const IconButton = styled.button`
  background-color: #263238;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #2f4858;
  }
`;
