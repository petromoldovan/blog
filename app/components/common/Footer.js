import React from 'react'
import styled from 'styled-components'

const FooterCont = styled.footer`
	  margin: 0;
    padding: 20px;
    color: white;
    background-color: black;
    text-align: center;
    position: fixed;
    width: 100%;
    bottom: 0;
`
const FooterMenu = styled.div`
	display: flex;
	justify-content: center;
	
	&>div {
		width: 30%;
	};
	
`
const List = styled.div`
	margin: 0;
	padding: 0;
	flex-direction: row;
  display: flex;
	div {
		list-style: none;
		font-size: 10px;
		display: flex;
		flex: 1;
		text-align: center;
		justify-content: center;
	};
`

const Footer = () => {
	return (
		<FooterCont>
			<h2>Company Blog</h2>
			<h6>Inspect And Inform</h6>
			<FooterMenu>
				<div>
					<List>
						<div>Lorem Ipsum</div>
						<div>Contact</div>
						<div>Location</div>
						<div>Lorem Ipsum</div>
					</List>
				</div>
			</FooterMenu>
		</FooterCont>
	)
}

export default Footer
