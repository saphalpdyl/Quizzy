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
	interface travelData {
		source: string;
		place: string;
	}
}

export {};
