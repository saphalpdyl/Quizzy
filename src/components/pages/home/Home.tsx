import React, { useEffect, useState } from "react";

//comps
import Menu from "./Menu";
import Question from "./Question";

//styled comps
import { HomeContainer } from "./Home.styled";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<HomeContainer className="pages-home">
			<Question />
			<Menu />
		</HomeContainer>
	);
};

export default Home;
