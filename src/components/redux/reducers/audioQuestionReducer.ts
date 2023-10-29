import cow from "../../../../assets/sounds/cow.mp3";
import elephant from "../../../../assets/sounds/elephant.mp3";
import frog from "../../../../assets/sounds/frog.mp3";
import goat from "../../../../assets/sounds/goat.mp3";
import sun from "../../../../assets/sounds/sun.wav";
import earth from "../../../../assets/sounds/earth.mp3";
import hen from "../../../../assets/sounds/hen.mp3";
import pig from "../../../../assets/sounds/pig.mp3";

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
	{
		source: earth,
		answer: "Earth",
	},
	{
		source: pig,
		answer: "Pig",
	},
	{
		source: hen,
		answer: "Hen",
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
