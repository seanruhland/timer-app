import styled from 'styled-components';

export const TimerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #37474f;
	border-radius: 10px;
	padding: 20px;
	width: 300px;
	color: white;
`;

export const CanvasWrapper = styled.div`
	position: relative;
`;

export const StyledCanvas = styled.canvas`
	position: absolute;
	top: 0;
	left: 0;
`;

export const TimeDisplay = styled.input`
	font-size: 24px;
	background: transparent;
	border: none;
	color: white;
	text-align: center;
	width: 100px;
`;

export const Controls = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-top: 20px;
`;

export const ControlButton = styled.button`
	background: transparent;
	border: none;
	color: white;
	font-size: 16px;
	cursor: pointer;
`;

export const DragHandle = styled.div`
	position: absolute;
	width: 20px;
	height: 20px;
	background: white;
	border-radius: 50%;
	cursor: pointer;
	transform: translate(-50%, -50%);
`;
