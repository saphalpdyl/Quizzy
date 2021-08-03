import cow from "../../../../assets/sounds/cow.mp3";
import elephant from "../../../../assets/sounds/elephant.mp3";
import frog from "../../../../assets/sounds/frog.mp3";
import goat from "../../../../assets/sounds/goat.mp3";
import sun from "../../../../assets/sounds/sun.wav";

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
	{
		source: sun,
		answer: "Sun",
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
