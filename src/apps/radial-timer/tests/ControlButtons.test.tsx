import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useTimerContext } from '../TimerContext.tsx';
import ControlButtons from '../ControlButtons.tsx';

// Mock the TimerContext
jest.mock('../TimerContext.tsx', () => ({
  useTimerContext: jest.fn(),
}));

describe('ControlButtons', () => {
  let mockContext: any;

  beforeEach(() => {
    mockContext = {
      isRunning: false,
      time: 60,
      totalTime: 60,
      setIsRunning: jest.fn(),
      setProgress: jest.fn(),
      setTotalTime: jest.fn(),
      setTime: jest.fn(),
    };
    (useTimerContext as jest.Mock).mockReturnValue(mockContext);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders control buttons correctly', () => {
    render(<ControlButtons />);

    // Check if all buttons are rendered
    expect(screen.getByText('+1:00')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
    expect(screen.getByTestId('start-buttons')).toBeInTheDocument();
  });

  test('start/pause button toggles isRunning state', () => {
    render(<ControlButtons />);

    const startPauseButton = screen.getByTestId('start-buttons');
    fireEvent.click(startPauseButton);

    expect(mockContext.setIsRunning).toHaveBeenCalledWith(!mockContext.isRunning);
  });

  test('reset button resets the timer', () => {
    render(<ControlButtons />);

    const resetButton = screen.getByText('Reset');
    fireEvent.click(resetButton);

    expect(mockContext.setTime).toHaveBeenCalledWith(60);
  });
})
