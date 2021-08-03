import styled from "styled-components";
import { motion } from "framer-motion";

export const QuestionContainer = styled.div`
	height: 100%;
	width: 100%;
	flex: 8;
	padding: 3rem 0rem;
`;

export const QuestionWrapper = styled.div`
	height: 100%;
	width: 100%;
	padding: 0rem 5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	font-weight: 900;
	font-family: "consolas", sans-serif;
`;

export const QuestionTitle = styled.span`
	flex: 3;
	width: 100%;
	background-color: var(--front);
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 2rem 4rem;
	border-radius: 10px;
	font-size: 4rem;
`;

export const QuestionNumber = styled.span`
	width: 20%;
	height: 5rem;
	font-size: 3rem;
	align-self: flex-start;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	background-color: var(--front);
	border-radius: 10px;
	margin-bottom: 3rem;
`;
