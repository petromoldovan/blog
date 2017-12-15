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

const Header = () => {
	return (
		<NavContainer>
			<h2>DCSO Blog</h2>
		</NavContainer>
	)
}

export default Header
