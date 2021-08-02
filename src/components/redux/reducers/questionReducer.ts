interface action {
	type: string;
	question: question;
	num: number;
}

export const questionReducer = (state = {}, action: action) => {
	switch (action.type) {
		case "SELECT_QUESTION":
			return [action.question, action.num];

		default:
			return state;
	}
};
