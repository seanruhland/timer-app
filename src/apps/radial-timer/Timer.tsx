import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import Header from './Header.tsx';
import TimerBody from './TimerBody.tsx';
import { TimerContextProvider } from './TimerContext.tsx';
export const Timer = ({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <TimerContainer>
      <Header setIsOpen={setIsOpen} />
      <TimerContextProvider>
        <TimerBody />
      </TimerContextProvider>
    </TimerContainer>
  );
};

const TimerContainer = styled.div`
  width: 22vw;
  height: 50vh;
  max-width: 300px;
  min-width: 250px;
  min-height: 300px;
  max-height: 600px;
  background-color: #1d2c35;
  overflow: hidden;
  border-radius: 10px;
  padding: 10px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;
