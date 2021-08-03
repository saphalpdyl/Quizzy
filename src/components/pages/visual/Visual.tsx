import React, { useEffect } from "react";
import QuestionList from "../../common/reveal_questions/QuestionList";

/**
 * @author Cheyatz
 * @description Page for visual round , Uses the [visQues] reducer
 */
const Visual: React.FC = () => {
	useEffect(() => {
		document.title = "Visual Round - Made with ♥ by Cheyatz";
	}, []);

	return <QuestionList reducer="visQues" type="img" />;
};

export default Visual;
