import React, { useEffect, useState } from "react";

//styled comps
import { Options as OptionsWrapper, Option, ShowAll } from "./Options.styled";

export interface OptionsProps {
	options: option[];
}

/**
 * @author Cheyatz
 * @description List option components
 * @param {option[]} [e]
 */
const Options: React.FC<OptionsProps> = ({ options }) => {
	const [answerSelected, setAnswerSelected]: [boolean[], Function] = useState(
		[]
	);
	const [selectedAnswer, setSelectedAnswer]: [string, Function] = useState("");

	//Sets the answerSelected boolean to true revealing the answers
	const handleOptionSelect = (option: option, index: number) => {
		let tempState = answerSelected;
		tempState[index] = true;
		setAnswerSelected(tempState);
		setSelectedAnswer(option.option);
	};

	// show all the answers
	const handleShowAll = () => {
		setAnswerSelected([true, true, true, true]);
	};

	// Listen for changes in the option (change in question) and clear the state
	useEffect(() => {
		setAnswerSelected([false, false, false, false]);
	}, [options]);

	return (
		<OptionsWrapper>
			{options.map((option, index) => (
				<Option
					onClick={() => handleOptionSelect(option, index)}
					isAnswered={answerSelected[index]}
					key={index}
					correct={option?.isCorrect || false}
				>
					{option.option}
				</Option>
			))}
			<ShowAll
				whileTap={{
					backgroundColor: "var(--clr-yellow-1)",
					transition: {
						duration: 0.1,
					},
				}}
				onClick={handleShowAll}
			>
				Show All
			</ShowAll>
		</OptionsWrapper>
	);
};

export default Options;
