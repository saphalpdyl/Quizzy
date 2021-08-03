import React, { useEffect } from "react";

// Components
import ChoicedQuestion from "../../common/choice_questions/ChoicedQuestions";

/**
 * @author Cheyatz
 * @description Ticket Round .... round with tickets
 */
const TicketRound: React.FC = () => {
	useEffect(() => {
		document.title = "Visual Round - Made with ♥ by Cheyatz";
	}, []);

	return <ChoicedQuestion reducer="questionsList" />;
};

export default TicketRound;
