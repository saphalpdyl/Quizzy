// Functions
import fetchAndReturnShuffledQuestions from "../../common/fetchAndReturnShuffledQuestions";

export const numberQuestionsListReducer = (
	state: Promise<question[]> = fetchAndReturnShuffledQuestions(
		"numberQuestions"
	),
	action: rootAction
) => {
	switch (action.type) {
		default:
			return state;
	}
};
