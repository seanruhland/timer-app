import React from 'react';
import styled from 'styled-components';
import {Header} from './Header.tsx';
export const Container = () => {
	return (
		<ViewWrapper>
			<TimerContainer>
				<Header/>
			</TimerContainer>
		</ViewWrapper>
	);
};
const ViewWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	background-color: #2f4858;
`;

const TimerContainer = styled.div`
	width: 20vw;
	height: 50vh;
	background-color: #33658a;
	border-radius: 10px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	color: #fff;
`;
