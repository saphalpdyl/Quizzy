import React from "react";

//styles
import "./styles/css/TravelQuestion.min.css";

//styled comps
import {
	TravelQuestionContainer,
	TravelAnswerRevealButton as Button,
	IFrameContainer,
} from "./TravelQuestion.styled";

export interface TravelQuestionProps {
	source: string;
	place: string;
}

const TravelQuestion: React.FC<TravelQuestionProps> = ({ source, place }) => {
	return (
		<TravelQuestionContainer className="travel-question">
			<IFrameContainer>
				<div className="iframe-blur"></div>
				<iframe
					className="iframe-img"
					src={source}
					width="100%"
					height="600"
					loading="lazy"
				></iframe>
			</IFrameContainer>
			<Button>Nil Barahi Temple</Button>
		</TravelQuestionContainer>
	);
};

export default TravelQuestion;
