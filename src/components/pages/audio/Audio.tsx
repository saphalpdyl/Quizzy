import React from "react";

//comps
import QuestionList from "../../common/reveal_questions/QuestionList";

export interface AudioProps {}

const Audio: React.FC<AudioProps> = () => {
	return <QuestionList type="audio" reducer="advQues" />;
};

export default Audio;
