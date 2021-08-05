import styled from "styled-components";
import { motion } from "framer-motion";

export const Options = styled.div`
	margin-top: 2rem;
	flex: 7;
	width: 100%;
	max-height: 60%;
	padding: 4rem 4rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 3rem;
`;

export const Option = styled.span<{
	correct: boolean;
	isAnswered?: boolean;
}>`
	--bg-color: ${(p) =>
		p.isAnswered
			? p.correct
				? "var(--clr-green-1)"
				: "var(--clr-ruby-2)"
			: "var(--front)" || "var(--front)"};
	width: 100%;
	height: 10rem;
	font-size: 2.4rem;
	letter-spacing: 3px;
	font-weight: 100;
	display: flex;
	align-items: center;
	user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	cursor: pointer;
	padding: 1.7rem 5rem;
	transition: all 0.5s;
	background-color: var(--bg-color);

	&:hover {
		border-radius: 20px;
		background-color: ${(p) =>
			p.isAnswered ? "" : "rgba(255, 255, 255, 0.512)"};
	}
`;

export const ShowAll = styled(motion.button)`
	outline: none;
	border: none;
	width: 20rem;
	padding: 1rem 0rem;
	background-color: var(--clr-yellow-2);
	align-self: flex-end;
	font-family: "Consolas", sans-serif;
	font-weight: 900;
	letter-spacing: 3px;
	font-size: 1.5rem;
	cursor: pointer;
`;
