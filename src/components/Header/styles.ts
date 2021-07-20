import styled from "styled-components"

export const Header = styled.header`
	height: 5rem;
	background-color: #141a29;
`

export const Wrap = styled.div`
	max-width: 1120px;
	height: 5rem;
	margin: 0 auto;
	display: flex;
	align-items: center;
`

export const Navbar = styled.nav`
	margin-left: 3rem;
	height: 3rem;
`

export const Link = styled.a`
	display: inline-block;
	position: relative;
	padding: 0 0.3rem;

	height: 3rem;
	line-height: 3rem;
	cursor: pointer;
	color: white;

	+ a {
		margin-left: 2rem;
	}
`

export const Button = styled.button`
	height: 2.3rem;
	border-radius: 3rem;
	background-color: transparent;
	border: 0;
	display: flex;
	align-items: center;
	justify-items: center;
	margin-left: auto;
	padding: 0 1.3rem;
	color: #fff;
	font-weight: bold;
	transition: filter 0.5s;

	svg {
		width: 25px;
		height: 25px;
	}

	img {
		border-radius: 50%;
	}

	&:hover {
		filter: brightness(0.8);
	}

	svg:first-child {
		margin-right: 1rem;
	}
`
