import React from 'react'
import styled from 'styled-components'

const NavContainer = styled.nav`
	  margin: 0;
    position: absolute;
    padding: 0;
    width: 100%;
    color: white;
    background-color: transparent;
    text-align: center;
`

const NavContainerBlack = styled.nav`
	margin: 0;
	padding: 20px;
	color: white;
	background-color: black;
	text-align: center;
`

const Header = (props) => {
	if (props.transparent) return (
		<NavContainer>
			<h2>{props.title}</h2>
		</NavContainer>
	)

	return (
		<NavContainerBlack>
			<h2>{props.title}</h2>
		</NavContainerBlack>
	)
}

export default Header
