import React from "react";

//comps
import QuestionList from "../../common/reveal_questions/QuestionList";
/**
 * @author Cheyatz
 * @description Page for Travel Round , uses the [trvQues] reducer
 */
const Travel: React.FC = () => {
	return <QuestionList type="iframe" reducer="trvQues" />;
};

export default Travel;
