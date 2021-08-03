import React, { useState } from "react";

//hooks
import useFetch from "../../hooks/useFetch";

//styled comps
import { PageWrapper, FormContainer, AddInput, AddSubmit } from "./Add.styled";
export interface AddProps {}

/**
 * @author Cheyatz
 * @description POST multiple choice question data to json-server
 */
const Add: React.FC<AddProps> = () => {
	// States
	const [question, setQuestion] = useState("");
	const [endpoint, setEndpoint]: [string, Function] = useState("questions");
	const [options, setOptions] = useState({
		option0: "", //* Correct Option
		option1: "",
		option2: "",
		option3: "",
	});

	// handle where the questions is sent to
	const handleEndpointChange = (e: any) => setEndpoint(e.target.value);

	//Handle Option Text change
	const handleOptionTextChange = (e: any) => {
		const { name, value } = e.target;
		setOptions({
			...options,
			[name]: value,
		});
	};

	// Create a suitable payload and POST to server
	const handleDataSubmit = async (e: any) => {
		e.preventDefault();
		let unshuffledOptions: option[] = [
			{
				option: options.option0,
				isCorrect: true,
			},
			{
				option: options.option1,
			},
			{
				option: options.option2,
			},
			{
				option: options.option3,
			},
		];

		const payload: question = {
			question: question,
			options: unshuffledOptions,
			id: await useFetch("https://www.uuidgenerator.net/api/guid"),
		};

		useFetch(`http://localhost:8080/${endpoint}`, true, "POST", payload);

		setOptions({
			option0: "",
			option1: "",
			option2: "",
			option3: "",
		});
		setQuestion("");
	};

	return (
		<PageWrapper className="pages-add">
			<FormContainer onSubmit={handleDataSubmit}>
				<AddInput
					value={question}
					onChange={(e) => {
						setQuestion(e.target.value);
					}}
					main
				/>
				<AddInput
					value={options.option0}
					onChange={handleOptionTextChange}
					name="option0"
					placeholder="Right answer"
				/>
				<AddInput
					value={options.option1}
					onChange={handleOptionTextChange}
					name="option1"
					placeholder="Wrong answer"
				/>
				<AddInput
					value={options.option2}
					onChange={handleOptionTextChange}
					name="option2"
					placeholder="Wrong answer"
				/>
				<AddInput
					value={options.option3}
					onChange={handleOptionTextChange}
					name="option3"
					placeholder="Wrong answer"
				/>
				<AddSubmit type="submit">Submit</AddSubmit>
				<select onChange={handleEndpointChange}>
					<option value="questions">Ticket Round</option>
					<option value="numberQuestions">Number Round</option>
				</select>
			</FormContainer>
		</PageWrapper>
	);
};

export default Add;
