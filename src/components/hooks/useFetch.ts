const useFetch = async (
	url: string,
	json?: boolean,
	method?: string,
	payload?: question
) => {
	const mode: RequestInit | undefined =
		method === "POST"
			? {
					method: "POST",
					headers: {
						"Content-type": "application/json",
					},
					body: JSON.stringify(payload),
			  }
			: undefined || undefined;
	try {
		const res = await fetch(url, mode);
		if (json) {
			const json = await res.json();
			return json;
		} else if (json == false || json == undefined) {
			return res.text();
		}
	} catch (e) {
		console.log("ERROR : ", e);
	}
};

export default useFetch;
