import React, { useState } from "react";

//styles
import "./styles/css/TravelQuestion.min.css";

//styled comps
import {
	QuestionContainer,
	AnswerRevealButton as Button,
	IFrameContainer,
} from "./QuestionItem.styled";

export interface QuestionItemProps {
	source: string;
	answer: string;
	type: "iframe" | "audio" | "img";
}

const QuestionItem: React.FC<QuestionItemProps> = ({
	source,
	answer,
	type,
}) => {
	const [isTextHidden, setIsTextHidden] = useState(true);

	// Set is text hidden state to its opposite
	const handleButtonClick = () => {
		setIsTextHidden(!isTextHidden);
	};

	return (
		<QuestionContainer className="travel-question">
			{type === "iframe" ? (
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
			) : type === "audio" ? (
				<audio controls>
					<source src={source} type="audio/mp3" />
					Audio not supported
				</audio>
			) : (
				<img src={source} />
			)}
			<Button onClick={handleButtonClick} isHidden={isTextHidden}>
				<span>{answer}</span>
			</Button>
		</QuestionContainer>
	);
};

export default QuestionItem;
