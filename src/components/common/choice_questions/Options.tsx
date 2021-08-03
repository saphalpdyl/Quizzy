import React, { useEffect, useState } from "react";

//styled comps
import { Options as OptionsWrapper, Option } from "./Options.styled";

export interface OptionsProps {
	options: option[];
}

/**
 * @author Cheyatz
 * @description List option components
 * @param {option[]} [e]
 */
const Options: React.FC<OptionsProps> = ({ options }) => {
	const [answerSelected, setAnswerSelected]: [boolean, Function] =
		useState(false);
	const [selectedAnswer, setSelectedAnswer]: [string, Function] = useState("");

	//Sets the answerSelected boolean to true revealing the answers
	const handleOptionSelect = (option: option) => {
		setAnswerSelected(true);
		setSelectedAnswer(option.option);
	};

	// Listen for changes in the option (change in question) and clear the state
	useEffect(() => {
		setAnswerSelected(false);
		setSelectedAnswer("");
	}, [options]);

	return (
		<OptionsWrapper>
			{options.map((option, index) => (
				<Option
					onClick={() => handleOptionSelect(option)}
					isAnswered={answerSelected}
					key={index}
					correct={option?.isCorrect || false}
				>
					{option.option}
				</Option>
			))}
		</OptionsWrapper>
	);
};

export default Options;
