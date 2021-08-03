import styled from "styled-components";

export const TravelQuestionContainer = styled.div`
	flex: 1;
	width: 100%;
	display: grid;
	place-items: center;
	grid-template-columns: 2fr 1fr;
	grid-template-rows: 1fr;
	gap: 5rem;
`;

export const TravelAnswerRevealButton = styled.button<{
	isHidden: boolean;
}>`
	margin-right: 5rem;
	height: 8rem;
	width: 100%;
	outline: none;
	border: none;
	background-color: ${(p) =>
		p.isHidden ? "var(--front)" : "var(--clr-yellow-2)"};
	font-size: 3rem;
	font-weight: 900;
	font-family: "Consolas", sans-serif;
	letter-spacing: 2px;
	border-radius: 20px;
	color: var(--clr-indigo-2);
	cursor: pointer;
	user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	transition: background-color 0.5s;
	& span {
		opacity: ${(p) => (p.isHidden ? 0 : 1)};
		transition: opacity 0.5s;
	}
`;

export const IFrameContainer = styled.div`
	width: 100%;
	height: 100%;
`;
