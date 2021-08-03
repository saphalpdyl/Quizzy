import React, { useState } from "react";

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
	const [isTextHidden, setIsTextHidden] = useState(true);

	// Set is text hidden state to its opposite
	const handleButtonClick = () => {
		setIsTextHidden(!isTextHidden);
	};

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
			<Button onClick={handleButtonClick} isHidden={isTextHidden}>
				<span>{place}</span>
			</Button>
		</TravelQuestionContainer>
	);
};

export default TravelQuestion;
