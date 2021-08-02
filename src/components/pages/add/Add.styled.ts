import styled from "styled-components";

export const PageWrapper = styled.div`
	display: grid;
	place-items: center;
	height: 100%;
	width: 100%;
`;

export const FormContainer = styled.form`
	display: grid;
	height: 30rem;
	width: 100%;
	place-items: center;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
	gap: 5rem;
`;

export const AddInput = styled.input<{
	main?: boolean;
}>`
	grid-column: ${(p) => (p.main ? "1 / span 2" : "" || "")};
	height: 5rem;
	width: ${(p) => (p.main ? "80rem" : "40rem" || "40rem")};
	border: none;
	outline: none;
	background-color: var(--front);
	color: wheat;
	font-size: 2rem;
	font-family: "consolas", sans-serif;
	padding: 0rem 2rem;
`;

export const AddSubmit = styled.button`
	grid-column: 1 / span 2;
`;
