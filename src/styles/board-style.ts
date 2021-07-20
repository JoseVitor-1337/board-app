import styled from "styled-components"

export const Wrapper = styled.main`
	max-width: 1000px;
	margin: 1rem auto;
	padding: 1rem;
	background-color: #17181f;
	border-radius: 6px;
`

export const Span = styled.span`
	color: #ffb800;
	display: flex;
	align-items: center;
	font-size: 1.1rem;

	button {
		margin-right: 5px;
		background-color: transparent;
		border: 0;
		transition: opacity 0.4s;
		&:hover {
			opacity: 0.5;
		}
	}
`

export const Button = styled.button``

export const Form = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;

	button {
		margin-left: 10px;
		width: 5%;
		height: 50px;
		border: 0;
		background-color: #ffb800;
		border-radius: 6px;

		display: flex;
		align-items: center;
		justify-content: center;

		transition: all 0.4s;

		&:hover {
			filter: brightness(0.7);
			transform: scale(1.1);
		}
	}
`

export const Input = styled.input`
	width: 95%;
	height: 50px;
	background-color: #20212c;
	border: 1px solid #424242;
	border-radius: 6px;
	padding: 3px 10px;
	color: #fff;
`

export const Title = styled.h3`
	color: #fff;
	margin-top: 1rem;
`
