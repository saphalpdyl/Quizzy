const fetchAndSetQuestions = async () => {
	const res = await fetch("http://localhost:8080/questions");
	const json_data = await res.json();
	const shuffled_json_data = json_data.sort(() => Math.random() - 0.5);
	return shuffled_json_data;
};

export const questionListReducer = (
	state = fetchAndSetQuestions(),
	action: any
) => {
	switch (action.type) {
		default:
			return state;
	}
};
