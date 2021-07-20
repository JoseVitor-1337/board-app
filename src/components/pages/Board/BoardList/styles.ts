import styled from "styled-components"

export const Section = styled.section``

export const Article = styled.article`
	background-color: #20212c;
	margin: 1rem 0;
	padding: 0.5rem;
	border-radius: 6px;
`

export const Text = styled.p`
	cursor: pointer;
	color: #f2f6fc;
	font-size: 1.2rem;
	line-height: 150%;
`

export const Actions = styled.div`
	width: 100%;
	display: flex;

	align-items: center;
	justify-content: space-between;
	margin-top: 1.5rem;
`

export const WrapIcons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Wrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Time = styled.time`
	color: #ffb800;
	margin-left: 5px;
	margin-right: 1rem;
`

export const Button = styled.button`
	background: transparent;
	border: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: filter 0.4s;
	&:hover {
		filter: brightness(0.7);
	}
	+ button {
		margin-left: 10px;
	}
`

export const Span = styled.span`
	margin-left: 5px;
	color: #fff;
	cursor: pointer;
`
