import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import CountDownInput from './CountDownInput.tsx';
import ControlButtons from './ControlButtons.tsx';
import { useTimerContext } from './TimerContext.tsx';
import { updateCanvas } from './Utils.ts';

const TimerBody = () => {
  const { progress } = useTimerContext();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();

  const animateTimeProgress = () => {
    updateCanvas(canvasRef, progress);
    animationFrameId.current = requestAnimationFrame(animateTimeProgress);
  };

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(animateTimeProgress);
    return () => cancelAnimationFrame(animationFrameId.current!);
  }, [progress]);

  return (
    <>
      <TimerCanvas ref={canvasRef} width={200} height={200} />
      <CountDownInput />
      <ControlButtons />
    </>
  );
};

export default TimerBody;

const TimerCanvas = styled.canvas`
  width: 14vw;
  height: 14vw;
  background-color: transparent;
  position: relative;
  z-index: 1;
`;
