import React, { useState } from "react";
import { useSelector, RootStateOrAny } from "react-redux";

//components
import QuestionItem from "./QuestionItem";

//styled comps
import { Container, QuestionListContainer, Title } from "./QuestionList.styled";

export interface QuestionListProps {
	type: "iframe" | "audio" | "img";
	reducer: "trvQues" | "advQues" | "visQues";
}

/**
 * @author Cheyatz
 * @description List Questions , Each question is a object with property [source] and [answer] for the api link and place name respectively
 */
const QuestionList: React.FC<QuestionListProps> = ({ type, reducer }) => {
	const [questionData, setQuestionData]: [Data[], Function] = useState([]);

	useSelector((state: RootStateOrAny) => state[reducer]).then((data: Data) =>
		setQuestionData(data)
	);

	return (
		<Container className="pages-Travel">
			<Title>
				{type === "iframe"
					? "Travel Round"
					: type === "audio"
					? "Audio Round"
					: "Visual Round"}
			</Title>
			<QuestionListContainer>
				{questionData.map(({ source, answer }, index) => (
					<QuestionItem
						key={index}
						source={source}
						type={type}
						answer={answer}
					/>
				))}
			</QuestionListContainer>
		</Container>
	);
};

export default QuestionList;
