import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TimePickerInput from '../TimePickerInput.tsx';
import { useTimerContext } from '../TimerContext.tsx';
import dayjs from 'dayjs';

// Mock the TimerContext
jest.mock('../TimerContext.tsx', () => ({
  useTimerContext: jest.fn(),
}));

describe('TimePickerInput Component', () => {
  let mockContext: any;

  beforeEach(() => {
    mockContext = {
      isRunning: false,
      time: 120,
      totalTime: 600,
      setProgress: jest.fn(),
      setTotalTime: jest.fn(),
      setTime: jest.fn(),
    };
    (useTimerContext as jest.Mock).mockReturnValue(mockContext);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders TimePickerInput correctly', () => {
    render(<TimePickerInput />);
    expect(screen.getByTestId('time-picker')).toBeInTheDocument();
  });
});
