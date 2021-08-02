import styled from "styled-components";

export const TravelQuestionContainer = styled.div`
	flex: 1;
	width: 100%;
	display: grid;
	place-items: center;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr;
`;

export const TravelAnswerRevealButton = styled.button`
	height: 8rem;
	width: 50rem;
	outline: none;
	border: none;
	background-color: var(--clr-yellow-2);
	font-size: 3rem;
	font-weight: 900;
	font-family: "Consolas", sans-serif;
	letter-spacing: 2px;
	border-radius: 20px;
	color: var(--clr-indigo-2);
`;

export const IFrameContainer = styled.div`
	width: 100%;
	height: 100%;
`;
