import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>Radial Timer</h1>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	font-size: 1 rem;
`;