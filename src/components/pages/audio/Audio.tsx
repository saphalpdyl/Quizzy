import React from "react";

export interface AudioProps {}

const Audio: React.FC<AudioProps> = () => {
	return (
		<div className="pages-audio">
			<span>Hello World - Audio</span>
			<audio controls>
				<source src="../../../../assets/sounds/cow.mp3" type="audio/mp3" />
				Doesn't support doge
			</audio>
		</div>
	);
};

export default Audio;
