import React, { Dispatch, SetStateAction, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FiPlay, FiPause } from 'react-icons/fi'; // Icon imports
import CountDownInput from './CountDownInput.tsx';

export const TimerBody = ({
  isRunning,
  setIsRunning,
}: {
  isRunning: boolean;
  setIsRunning: Dispatch<SetStateAction<boolean>>;
}) => {
  const [time, setTime] = useState(60); // time in seconds
  const [progress, setProgress] = useState(100); // progress in percentage
  const [totalTime, setTotalTime] = useState(60); // total time in seconds

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();

  const updateCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const currentRadius = canvas.width / 2;
      const endAngle = (progress / 100) * 2 * Math.PI;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background circle
      ctx.beginPath();
      ctx.arc(currentRadius, currentRadius, currentRadius - 10, 0, 2 * Math.PI, false);
      ctx.lineWidth = 8;
      ctx.strokeStyle = '#33658A';
      ctx.stroke();

      // Progress arc
      ctx.beginPath();
      ctx.arc(currentRadius, currentRadius, currentRadius - 10, 1.5 * Math.PI, endAngle - 0.5 * Math.PI, true);
      ctx.lineWidth = 8;
      ctx.strokeStyle = '#C3D9E9';
      ctx.stroke();
    }
  };

  const animate = () => {
    updateCanvas();
    animationFrameId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId.current!);
  }, [progress]);

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
    <>
      <TimerCanvas ref={canvasRef} width={200} height={200} />
      <CountDownInput
        time={time}
        setTime={setTime}
        setTotalTime={setTotalTime}
        totalTime={totalTime}
        setProgress={setProgress}
        isRunning={isRunning}
      />
      <ControlButtons>
        <ControlButton onClick={handleAddMinute}>+1:00</ControlButton>
        <IconButton onClick={handleStartPause}>{isRunning ? <FiPause size={24} /> : <FiPlay size={24} />}</IconButton>
        <ControlButton onClick={handleReset}>Reset</ControlButton>
      </ControlButtons>
    </>
  );
};

const TimerCanvas = styled.canvas`
  width: 200px;
  height: 200px;
  background-color: transparent;
  position: relative;
  z-index: 1;
`;

const ControlButtons = styled.div`
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
