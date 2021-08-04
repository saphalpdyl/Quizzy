import React, { useEffect } from "react";

//comps
import QuestionList from "../../common/reveal_questions/QuestionList";

/**
 * @author Cheyatz
 * @description Page for Auditary Round , uses the [advQues] reducer
 */
const Audio: React.FC = () => {
	useEffect(() => {
		document.title = "Audio Round - Made with ♥ by Cheyatz";
	}, []);

	return <QuestionList type="audio" reducer="advQues" />;
};

export default Audio;
