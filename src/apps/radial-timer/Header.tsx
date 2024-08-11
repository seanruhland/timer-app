import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

export const Header = ({ setIsRunning }: { setIsRunning: Dispatch<SetStateAction<boolean>> }) => {
  const handleButtonClick = () => {
    setIsRunning(false);
  };

  return (
    <HeaderContainer>
      <h1>Radial Timer</h1>
      <button onClick={handleButtonClick}>×</button>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  font-size: 0.75 rem;
  padding: 0px 5px;
  button {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    outline: none;
    font-size: 1.5rem;
  }
`;
