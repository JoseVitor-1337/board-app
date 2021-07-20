import styled from "styled-components"

export const DonateContainer = styled.main`
	position: absolute;
	bottom: 20px;
	right: 20px;
`
export const Button = styled.button`
	border: 0;
	background-color: #ffb800;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	font-size: 1.2rem;
	filter: drop-shadow(2px 1px 5px rgba(0, 0, 0, 0.2));
	transition: all 0.4s;

	&:hover {
		transform: scale(1.2);
	}
`
