import styled from "styled-components"

export const Wrapper = styled.main`
	max-width: 1000px;
	margin: 0 auto;
	padding: 0 2rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const ConditionalTitle = styled.h3`
	font-size: 1.2rem;
	margin-top: 1rem;
`

export const Section = styled.section`
	max-width: 600px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const Title = styled.h1`
	font-size: 1.8rem;
	font-weight: bold;
	text-align: center;
	color: #141a29;
`
export const Text = styled.p`
	margin-top: 1rem;
	font-size: 1.4rem;
	color: #141a29;
	text-align: center;
`
export const Span = styled.span`
	color: #04dd75;
	font-size: bold;
`
export const Wrap = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin-bottom: 1.5rem;
`
export const Avatar = styled.img`
	width: 65px;
	height: 65px;
	border-radius: 50%;
	border: 2px solid #141a29;
	margin-top: 1rem;
	cursor: pointer;
	transition: transform 0.4s;

	+ & {
		margin-left: 10px;
	}

	&:hover {
		transform: scale(1.2);
	}
`
