import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { FiPlay, FiPause } from 'react-icons/fi'; // Icon imports

interface CountdownInputProps {
  isRunning: boolean;
  setProgress: Dispatch<SetStateAction<number>>;
  setTotalTime: Dispatch<SetStateAction<number>>;
  setTime: Dispatch<SetStateAction<number>>;
  setIsRunning: Dispatch<SetStateAction<boolean>>;
}

const ControlButtons = ({
  isRunning,
  setProgress,
  setTotalTime,
  setTime,
  setIsRunning,
}: CountdownInputProps) => {
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
      <IconButton onClick={handleStartPause}>{isRunning ? <FiPause size={24} /> : <FiPlay size={24} />}</IconButton>
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
  border-radius: 10px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  flex: 1;
  margin: 0 5px;

  &:hover {
    background-color: #37474f;
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
    background-color: #37474f;
  }
`;
