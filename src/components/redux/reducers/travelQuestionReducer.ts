import useFetch from "../../hooks/useFetch";

export const travelQuestionReducer = (
	state: Promise<Data[]> = useFetch(
		"http://localhost:8080/travelQuestions",
		true
	),
	action: rootAction
) => {
	switch (action.type) {
		default:
			return state;
	}
};
