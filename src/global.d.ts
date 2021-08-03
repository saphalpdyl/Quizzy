declare global {
	interface question {
		question: string;
		id: string;
		isDone?: boolean;
		options: option[];
	}

	interface option {
		option: string;
		isCorrect?: boolean;
	}
	interface Data {
		source: string;
		answer: string;
	}

	interface rootAction {
		type: string;
	}
}

export {};
