import React, { useEffect } from 'react';
import styled from 'styled-components';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useTimerContext } from './TimerContext.tsx';

const TimePickerInput = () => {
  const { isRunning, time, totalTime, setProgress, setTotalTime, setTime } = useTimerContext();

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTime((prev) => {
          if (prev > 0) {
            setProgress(Math.round(((prev - 1) / totalTime) * 10000) / 100);
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

  const handleInputChange = (value: dayjs.Dayjs) => {
    const [minutes, seconds] = value.format('mm:ss').split(':').map(Number);
    const totalSeconds = minutes * 60 + seconds;
    setTotalTime(totalSeconds);
    setTime(Math.max(0, Math.min(600, totalSeconds)));
    setProgress(100);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimeDisplay data-testid="time-picker">
        <TimePicker
          ampmInClock
          views={['minutes', 'seconds']}
          onChange={handleInputChange}
          value={dayjs()
            .set('hour', 0)
            .set('minute', Math.floor(time / 60))
            .set('second', time % 60)}
          disableOpenPicker
        />
      </TimeDisplay>
    </LocalizationProvider>
  );
};

export default TimePickerInput;

const TimeDisplay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  color: white;
  font-size: 2rem;
  text-align: center;
  background: transparent;
  z-index: 2;
  width: 100px;
  & .MuiOutlinedInput-root {
    color: white;
    border: none;
    text-align: center;
    justify-content: center;
    padding-left: 0;

    & .MuiOutlinedInput-notchedOutline {
      border: none;
    }

    & .MuiInputBase-input {
      text-align: center;
    }
  }

  & .MuiInputLabel-root {
    color: white;
  }

  & .MuiInputBase-input {
    color: white;
    text-align: center;
    font-size: 1.5rem;
  }
`;
