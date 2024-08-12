import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import CountDownInput from './CountDownInput.tsx';
import ControlButtons from './ControlButtons.tsx';
import { useTimerContext, TimerContextProvider } from './TimerContext.tsx';
import { updateCanvas } from './Utils.ts';

const TimerBody = () => {
  const { progress } = useTimerContext();
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
    <TimerContextProvider>
      <TimerCanvas ref={canvasRef} width={200} height={200} />
      <CountDownInput />
      <ControlButtons />
    </TimerContextProvider>
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
