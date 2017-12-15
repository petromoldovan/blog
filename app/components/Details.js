import React from 'react'
import styled from 'styled-components'
import Header from "./common/Header";
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import Spinner from "./common/Spinner";

const Root = styled.article`
	height: 100%;
`
const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	& > div {
		width: 40%;
		padding: 30px 0;
	}
`
const Image = styled.img`
	float: left;
	width: 200px;
	height: 200px;
`

const Details = (props) => {
	const {data} = props
	return (
		<Root>
			<Header title={"Details"} />
			<Container>
				<div>
					{
						data.post ?
							<div>
								<div>
									<h1>Title: {data.post.title}</h1>
									<h5>Author: {data.post.author}</h5>
								</div>
								<Image src={data.post.img} />
								{data.post.content}
							</div>
							:
						<Spinner />
					}
				</div>
			</Container>
		</Root>
	)
}

const query = gql`
    query getPost($id: ID!) {
        post(id: $id) {
            id
            title
            author
            created
            img
            content
            likes
            shares
        }
    }
`

export default graphql(query, {
	options: (props) => {return {variables: { id: props.history.location.state.id }}}
})(Details)
