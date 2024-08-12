import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../Header.tsx';

describe('Header Component', () => {
  let setIsOpenMock: jest.Mock;

  beforeEach(() => {
    setIsOpenMock = jest.fn();
    render(<Header setIsOpen={setIsOpenMock} />);
  });

  test('renders the header correctly', () => {
    expect(screen.getByText('Radial Timer')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /×/i })).toBeInTheDocument();
  });

  test('calls setIsOpen with false when the button is clicked', () => {
    const closeButton = screen.getByRole('button', { name: /×/i });
    fireEvent.click(closeButton);

    expect(setIsOpenMock).toHaveBeenCalledTimes(1);
    expect(setIsOpenMock).toHaveBeenCalledWith(false);
  });
});
