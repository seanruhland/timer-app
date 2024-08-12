import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useContext,
  useRef,
  useEffect,
  useMemo,
} from 'react';
import { updateCanvas } from './Utils.ts';

interface UseTimerInterface {
  isRunning: boolean;
  time: number;
  totalTime: number;
  progress: number;
  setProgress: Dispatch<SetStateAction<number>>;
  setTotalTime: Dispatch<SetStateAction<number>>;
  setTime: Dispatch<SetStateAction<number>>;
  setIsRunning: Dispatch<SetStateAction<boolean>>;
}

// Timer provider component
export const useTimer = (): UseTimerInterface => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(60); // time in seconds
  const [progress, setProgress] = useState(100); // progress in percentage
  const [totalTime, setTotalTime] = useState(60); // total time in seconds
  console.log('time', time);
  console.log('progress', progress);


  const value = useMemo(
    () => ({
      isRunning,
      setIsRunning,
      time,
      setTime,
      progress,
      setProgress,
      totalTime,
      setTotalTime,
    }),
    [isRunning, time, progress, totalTime],
  );

  return value;
};

// Create the context
export const TimerContext = createContext<UseTimerInterface>({
  isRunning: false,
  time: 60,
  totalTime: 60,
  progress: 100,
  setProgress: () => {},
  setTotalTime: () => {},
  setTime: () => {},
  setIsRunning: () => {},
});

export const TimerContextProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const state = useTimer();
  return <TimerContext.Provider value={state}>{children}</TimerContext.Provider>;
};

// Custom hook to use the Timer context
export const useTimerContext = (): UseTimerInterface => useContext(TimerContext);
