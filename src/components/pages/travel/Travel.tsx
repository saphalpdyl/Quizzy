import React, { useState } from "react";
import { useSelector, RootStateOrAny } from "react-redux";

//components
import TravelQuestion from "./TravelQuestion";

//styled comps
import {
	TravelContainer,
	TravelQuestionListContainer,
	TravelTitle,
} from "./Travel.styled";

export interface TravelProps {}

/**
 * @author Cheyatz
 * @description Travel Round Questions , Each question is a object with property [source] and [place] for the api link and place name respectively
 */
const Travel: React.FC<TravelProps> = () => {
	const [travelQuestionData, setTravelQuestionData]: [travelData[], Function] =
		useState([]);

	useSelector((state: RootStateOrAny) => state.trvQues).then(
		(data: travelData) => setTravelQuestionData(data)
	);

	return (
		<TravelContainer className="pages-Travel">
			<TravelTitle>Travel Round</TravelTitle>
			<TravelQuestionListContainer>
				{travelQuestionData.map(({ source, place }) => (
					<TravelQuestion source={source} place={place} />
				))}
			</TravelQuestionListContainer>
		</TravelContainer>
	);
};

export default Travel;
