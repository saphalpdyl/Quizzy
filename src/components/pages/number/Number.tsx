import React, { useEffect } from "react";

// Components
import ChoicedQuestion from "../../common/choice_questions/ChoicedQuestions";

/**
 * @author Cheyatz
 * @description Ticket Round but answer are in numbers
 */
const NumberRound: React.FC = () => {
	useEffect(() => {
		document.title = "Number Round - Made with ♥ by Cheyatz";
	}, []);

	return <ChoicedQuestion reducer="numberQuestionsList" />;
};

export default NumberRound;
