import styled from "styled-components";
import { motion } from "framer-motion";
import { cssVar, darken } from "polished";

export const MenuContainer = styled.div`
	height: 100%;
	width: 100%;
	flex: 2;
	padding: 5rem 0rem;
`;

export const MenuWrapper = styled(motion.div)`
	height: 100%;
	width: 100%;
	border-left: 3px solid rgba(255, 255, 255, 0.01);
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: flex-end;
	overflow: auto;
	overflow-x: hidden;

	&::-webkit-scrollbar {
		width: 15px;
	}

	&::-webkit-scrollbar-track {
		background-color: var(--front);
	}

	&::-webkit-scrollbar-thumb {
		background-color: white;
		border-radius: 10px;
	}
`;

export const MenuItem = styled(motion.div)<{
	colorVarName: string;
}>`
	padding: 0.6rem;
	width: 80%;
	background-color: ${(p) => `var(${p.colorVarName})`};
	color: white;
	border-radius: 20px 0 0 20px;
	font-size: 5rem;
	font-weight: 900;
	font-family: cursive;
	padding-left: 5rem;
	cursor: pointer;
	user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;

	box-shadow: 1px 1px 1px
			${(p) => darken(0.25, cssVar(p.colorVarName).toString())},
		2px 2px 1px ${(p) => darken(0.25, cssVar(p.colorVarName).toString())},
		3px 3px 1px ${(p) => darken(0.25, cssVar(p.colorVarName).toString())},
		4px 4px 1px ${(p) => darken(0.25, cssVar(p.colorVarName).toString())},
		5px 5px 1px ${(p) => darken(0.25, cssVar(p.colorVarName).toString())},
		6px 6px 1px ${(p) => darken(0.25, cssVar(p.colorVarName).toString())},
		7px 7px 1px ${(p) => darken(0.25, cssVar(p.colorVarName).toString())},
		0px 0px 5px black;
	& span {
		text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191,
			1px 4px 1px #919191, 1px 5px 1px #919191, 1px 6px 1px #919191,
			1px 7px 1px #919191;
	}
`;
