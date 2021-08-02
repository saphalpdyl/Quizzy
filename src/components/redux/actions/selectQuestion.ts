export const selectQuestion = (question: question, num: number) => {
	return {
		type: "SELECT_QUESTION",
		question: question,
		num: num,
	};
};
