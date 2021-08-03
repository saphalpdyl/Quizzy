//Hooks
import useFetch from "../../hooks/useFetch";

const fetchAndSetQuestions = async () => {
	const json_data: question[] = await useFetch(
		"http://localhost:8080/questions",
		true
	);
	const shuffled_json_data = json_data.sort(() => Math.random() - 0.5);
	return shuffled_json_data;
};

export const questionListReducer = (
	state = fetchAndSetQuestions(),
	action: rootAction
) => {
	switch (action.type) {
		default:
			return state;
	}
};
