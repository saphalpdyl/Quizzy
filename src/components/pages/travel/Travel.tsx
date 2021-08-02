import React from "react";

//components
import TravelQuestion from "./TravelQuestion";

//styled comps
import {
	TravelContainer,
	TravelQuestionListContainer,
	TravelTitle,
} from "./Travel.styled";

//Global Data
import { TRAVEL_SOURCES } from "../../globalData";

export interface TravelProps {}

const Travel: React.FC<TravelProps> = () => {
	return (
		<TravelContainer className="pages-Travel">
			<TravelTitle>Travel Round</TravelTitle>
			<TravelQuestionListContainer>
				{TRAVEL_SOURCES.map(({ source, place }) => (
					<TravelQuestion source={source} place={place} />
				))}
			</TravelQuestionListContainer>
			{/* <iframe
				src="https://www.google.com/maps/embed?pb=!4v1627883243309!6m8!1m7!1sCAoSLEFGMVFpcE04MmYwTnNnTjJubk1wWjIxOWdUaVVRV1dxdmFzNjZXRzFHNDh0!2m2!1d27.49832!2d83.2762367!3f2.720927319524165!4f4.891219620032913!5f0.7820865974627469"
				width="600"
				height="450"
				allowFullScreen
				loading="lazy"
			></iframe>
			<iframe
				src="https://www.google.com/maps/embed?pb=!4v1627883614703!6m8!1m7!1sCAoSLEFGMVFpcE1qNzZjRVpYa3FDcHRmWERpZmM1bWZISlhYcG4wbGhPX2V3a1df!2m2!1d28.2073989!2d83.9535396!3f29.61742006495415!4f4.199598405655237!5f0.7820865974627469"
				width="600"
				height="450"
				allowFullScreen
				loading="lazy"
			></iframe>
			<iframe
				src="https://www.google.com/maps/embed?pb=!4v1627883749677!6m8!1m7!1sCAoSLEFGMVFpcFBONFBPSUNmRlg1LTBuaUtwZ1I0WG01NTJ2cTdYRzVqYnBRTlp3!2m2!1d27.7149503!2d85.29041649999999!3f81.1923722061838!4f29.486785577447336!5f0.5630872626949746"
				width="600"
				height="450"
				allowFullScreen
				loading="lazy"
			></iframe>
			<iframe
				src="https://www.google.com/maps/embed?pb=!4v1627883818862!6m8!1m7!1sCAoSLEFGMVFpcE5EVUlKWG16MUFveTdaZ2J0R0tNbWZCOVpaLWtDOVczOVBVU3du!2m2!1d27.6051237!2d85.2634609!3f302.8452505190868!4f9.35720146120569!5f0.7820865974627469"
				width="600"
				height="450"
				allowFullScreen
				loading="lazy"
			></iframe>
			<iframe
				src="https://www.google.com/maps/embed?pb=!4v1627883914860!6m8!1m7!1sCAoSLEFGMVFpcE12bWV1SlJjSDl4bTdjWTVtaTZHRTJoQW9waWRIbTRjMTh4Mm1V!2m2!1d27.9040991!2d84.5840673!3f344.2122296569888!4f18.866353675831803!5f0.7820865974627469"
				width="600"
				height="450"
				allowFullScreen
				loading="lazy"
			></iframe>
			<iframe
				src="https://www.google.com/maps/embed?pb=!4v1627884141632!6m8!1m7!1sCAoSLEFGMVFpcE54SEd3dkxtcF9uQ0ZzcFp3Zm5YV0stUHBXdnJucU5FeXZmM284!2m2!1d27.6875413!2d86.7317107!3f271.325044471951!4f17.821145360125513!5f0.7820865974627469"
				width="600"
				height="450"
				allowFullScreen
				loading="lazy"
			></iframe>
			<iframe
				src="https://www.google.com/maps/embed?pb=!4v1627884299328!6m8!1m7!1sCAoSLEFGMVFpcE5XZEhVZi1KaTJicHQ4YnkwOU9zRkJrdVlVRk5RckxQOUh3MlZW!2m2!1d29.53900326173021!2d82.08029918038002!3f5.065740229152317!4f-15.229913047641134!5f0.7820865974627469"
				width="600"
				height="450"
				allowFullScreen
				loading="lazy"
			></iframe>
			<iframe
				src="https://www.google.com/maps/embed?pb=!4v1627884493216!6m8!1m7!1sCAoSLEFGMVFpcE9vODBvbUxmWFNLQlZyQm1zLW5RS1dBMGF4S3dSNk5WUmEteG50!2m2!1d28.81684169999999!2d83.8718667!3f142.39800498317987!4f-12.257962621993215!5f0.4000000000000002"
				width="600"
				height="450"
				loading="lazy"
			></iframe> */}
		</TravelContainer>
	);
};

export default Travel;
