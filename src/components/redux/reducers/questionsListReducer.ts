// Functions
import fetchAndReturnShuffledQuestions from "../../common/fetchAndReturnShuffledQuestions";

export const questionListReducer = (
	state = fetchAndReturnShuffledQuestions("questions"),
	action: rootAction
) => {
	switch (action.type) {
		default:
			return state;
	}
};
