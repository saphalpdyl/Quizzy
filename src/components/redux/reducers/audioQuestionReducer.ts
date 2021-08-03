import cow from "../../../../assets/sounds/cow.mp3";
import elephant from "../../../../assets/sounds/elephant.mp3";
import frog from "../../../../assets/sounds/frog.mp3";
import goat from "../../../../assets/sounds/goat.mp3";

const AUDIO_DATA_PAYLOAD: Data[] = [
	{
		source: cow,
		answer: "Cow",
	},
	{
		source: elephant,
		answer: "Elephant",
	},
	{
		source: frog,
		answer: "Frog",
	},
	{
		source: goat,
		answer: "Goat",
	},
];

export const audioQuestionReducer = (
	state = Promise.resolve(AUDIO_DATA_PAYLOAD),
	action: rootAction
) => {
	switch (action.type) {
		default:
			return state;
	}
};
