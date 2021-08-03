import React from "react";

// comps
import Menu from "./Menu";
import Question from "./Question";

// styled comps
import { Container } from "./ChoicedQuestions.styled";

export interface ChoicedQuestionProps {
	reducer: "questionsList" | "numberQuestionsList";
}

const ChoicedQuestion: React.FC<ChoicedQuestionProps> = ({ reducer }) => {
	return (
		<Container className="pages-home">
			<Question />
			<Menu reducer={reducer} />
		</Container>
	);
};

export default ChoicedQuestion;
