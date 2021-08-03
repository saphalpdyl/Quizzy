import useFetch from "../../hooks/useFetch";

export const visualQuestionReducer = (
	state = useFetch("http://localhost:8080/visualQuestions", true),
	action: rootAction
) => {
	switch (action.type) {
		default:
			return state;
	}
};
