import React from "react";

//comps
import QuestionList from "../../common/reveal_questions/QuestionList";

/**
 * @author Cheyatz
 * @description Page for Auditary Round , uses the [advQues] reducer
 */
const Audio: React.FC = () => {
	return <QuestionList type="audio" reducer="advQues" />;
};

export default Audio;
