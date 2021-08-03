import React from "react";

//comps
import QuestionList from "../../common/reveal_questions/QuestionList";

export interface TravelProps {}

const Travel: React.FC<TravelProps> = () => {
	return <QuestionList type="iframe" reducer="trvQues" />;
};

export default Travel;
