import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

const Header = ({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
  const handleButtonClick = () => {
    setIsOpen(false);
  };

  return (
    <HeaderContainer>
      <h3>Radial Timer</h3>
      <button onClick={handleButtonClick}>×</button>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  font-size: 0.75 rem;
  padding: 10px;
  background-color: #2c5777;
  transform: translateY(-10px);
  button {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    outline: none;
    font-size: 1.5rem;
  }
`;
