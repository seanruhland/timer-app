import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Timer } from '../Timer.tsx';
import Header from '../Header.tsx';
import TimerBody from '../TimerBody.tsx';

// Mocking the child components
jest.mock('../Header.tsx', () => jest.fn(() => <div>Mocked Header</div>));
jest.mock('../TimerBody.tsx', () => jest.fn(() => <div>Mocked TimerBody</div>));

describe('Timer Component', () => {
  let setIsOpenMock: jest.Mock;

  beforeEach(() => {
    setIsOpenMock = jest.fn();
    render(<Timer setIsOpen={setIsOpenMock} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders Timer component correctly', () => {
    // Check if the TimerContainer is rendered
    const timerContainer = screen.getByTestId('timer-container');
    expect(timerContainer).toBeInTheDocument();
  });

  test('passes setIsOpen prop to Header component', () => {
    // Check if Header component received the setIsOpen prop
    expect(Header).toHaveBeenCalledWith({ setIsOpen: setIsOpenMock }, {});
  });
});
