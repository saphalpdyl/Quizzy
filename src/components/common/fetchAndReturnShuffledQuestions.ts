// Hooks
import useFetch from "../hooks/useFetch";

const fetchAndReturnShuffledQuestions = async (
	endpoint: string
): Promise<question[]> => {
	const json_data: question[] = await useFetch(
		`http://localhost:8080/${endpoint}`,
		true
	);
	const shuffled_json_data = json_data.sort(() => Math.random() - 0.5);
	return shuffled_json_data;
};

export default fetchAndReturnShuffledQuestions;
