import React, { useState } from 'react';
import styled from 'styled-components';
import { Timer } from './Timer.tsx';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const RadialTimer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ViewWrapper>
        {isOpen ? <Timer setIsOpen={setIsOpen} /> : <OpenButton onClick={() => setIsOpen(true)}>Start Timing</OpenButton>}
      </ViewWrapper>
    </LocalizationProvider>
  );
};
export default RadialTimer;

const ViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #2f4858;
`;

const OpenButton = styled.button`
  background-color: #263238;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 2.5rem;
  margin: 0;
  &:hover {
    background-color: #37474f;
  }
`;
