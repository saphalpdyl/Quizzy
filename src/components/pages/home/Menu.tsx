import React, { useEffect, useState } from "react";

//redux
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

//globals
import { MENU_ITEM_BG_COLORS } from "../../globalData";
import { selectQuestion } from "../../redux/actions/selectQuestion";

//styled comps
import { MenuContainer, MenuWrapper, MenuItem } from "./Menu.styled";

//variants
import { containerVariant, selectedContainerVariant } from "./Menu.variant";

export interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
	const [questions, setQuestions]: [question[], Function] = useState([]);
	const [current, setCurrent]: [string, Function] = useState("");

	//Redux
	const dispatch = useDispatch();
	useSelector((state: RootStateOrAny) => state.questionsList).then(
		(data: question[]) => {
			setQuestions(data);
		}
	);

	// Set the currently selected question as selected in the state
	const setCurrentQuestionInTheState = (question: question, index: number) => {
		dispatch(selectQuestion(question, index));
		setCurrent(question.id);
	};

	return (
		<MenuContainer>
			<MenuWrapper>
				{questions &&
					questions.map((question, index) => (
						<MenuItem
							key={question.id}
							variants={
								question.id === current
									? selectedContainerVariant
									: containerVariant
							}
							initial="hidden"
							animate="show"
							whileHover="hover"
							colorVarName={
								MENU_ITEM_BG_COLORS[
									Math.round(Math.random() * (MENU_ITEM_BG_COLORS.length - 1))
								]
							}
							onClick={() => setCurrentQuestionInTheState(question, index + 1)}
						>
							<span>{index + 1}</span>
						</MenuItem>
					))}
			</MenuWrapper>
		</MenuContainer>
	);
};

export default Menu;
