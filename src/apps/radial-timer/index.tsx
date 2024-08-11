import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from './Header.tsx';
import { TimerBody } from './TimerBody.tsx';

const RadialTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  return (
    <ViewWrapper>
      <TimerContainer>
        <Header setIsRunning={setIsRunning} />
        <TimerBody isRunning={isRunning} setIsRunning={setIsRunning} />
      </TimerContainer>
    </ViewWrapper>
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

const TimerContainer = styled.div`
  width: 22vw;
  height: 50vh;
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
