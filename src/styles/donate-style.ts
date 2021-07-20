import styled from "styled-components"

export const Wrapper = styled.main`
	max-width: 1000px;
	margin: 0 auto;
	padding: 0 2rem;
	height: calc(100vh - 4.5rem);

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

export const Span = styled.span`
	font-weight: bold;
	color: #019950;
`

export const Title = styled.h2`
	font-size: 1.8rem;
	margin: 1rem 0;
`

export const SubTitle = styled.h3`
	margin-bottom: 1rem;
`

export const Button = styled.button`
	padding: 0.8rem;
	color: #fff;
	border: 0;
	border-radius: 5px;
	background-color: #019950;
	transition: all 0.4s;

	&:hover {
		background-color: #01ff50;
		transform: scale(1.1);
	}
`

export const VIP = styled.div`
	background-color: #019950;
	border-radius: 5px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;

	img {
		vertical-align: middle;
		border-radius: 50%;
	}
`

export const VipSpan = styled.span`
	margin-left: 1rem;
`
