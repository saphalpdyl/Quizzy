import React from "react";
import Loader from "react-loader-spinner";

//comps
import Options from "./Options";

//redux
import { RootStateOrAny, useSelector } from "react-redux";

//styled comps
import {
	QuestionContainer,
	QuestionWrapper,
	QuestionTitle,
	QuestionNumber,
} from "./Question.styled";

export interface QuestionProps {}

/**
 * @author Cheyatz
 * @description Shows the selected question
 */
const Question: React.FC<QuestionProps> = () => {
	const data: [question, number] = useSelector(
		(state: RootStateOrAny) => state.sq
	);

	const question = data[0];
	const questionNumber = data[1];

	return (
		<QuestionContainer className="home-question">
			<QuestionWrapper>
				{question == undefined ? (
					<React.Fragment>
						<Loader
							type="Hearts"
							color="var(--clr-ruby-2)"
							height={80}
							width={80}
						/>
						<h3>Waiting ...</h3>
					</React.Fragment>
				) : (
					<React.Fragment>
						<QuestionNumber> Q no. {questionNumber}</QuestionNumber>
						<QuestionTitle>{question.question}</QuestionTitle>
						<Options
							options={question.options.sort(() => Math.random() - 0.5)}
						/>
					</React.Fragment>
				)}
			</QuestionWrapper>
		</QuestionContainer>
	);
};

export default Question;
