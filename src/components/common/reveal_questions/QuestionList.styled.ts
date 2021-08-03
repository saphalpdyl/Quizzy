import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const Title = styled.span`
	width: 100%;
	height: 50vh;
	flex: 1;
	font-size: 5rem;
	font-family: cursive;
	font-weight: bold;
	padding: 5rem;
	text-align: center;
	background-color: var(--clr-ruby-2);
	color: white;
	margin-bottom: 50vh;
	margin-top: 20vh;
`;

export const QuestionListContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	gap: 10rem;
`;
