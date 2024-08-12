import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import CountDownInput from './CountDownInput.tsx';
import ControlButtons from './ControlButtons.tsx';
import { updateCanvas } from './Utils.ts';

const TimerBody = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(60); // time in seconds
  const [progress, setProgress] = useState(100); // progress in percentage
  const [totalTime, setTotalTime] = useState(60); // total time in seconds

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();

  const animate = () => {
    updateCanvas(canvasRef, progress);
    animationFrameId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId.current!);
  }, [progress]);

  return (
    <>
      <TimerCanvas ref={canvasRef} width={200} height={200} />
      <CountDownInput
        isRunning={isRunning}
        time={time}
        totalTime={totalTime}
        setIsRunning={setIsRunning}
        setProgress={setProgress}
        setTotalTime={setTotalTime}
        setTime={setTime}
      />
      <ControlButtons
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        setProgress={setProgress}
        setTotalTime={setTotalTime}
        setTime={setTime}
      />
    </>
  );
};

export default TimerBody;

const TimerCanvas = styled.canvas`
  width: 20vw;
  height: 20vw;
  background-color: transparent;
  position: relative;
  z-index: 1;
`;
