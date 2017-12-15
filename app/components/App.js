import React from 'react';
import styled from 'styled-components'
import Header from './common/Header'
import Spinner from './common/Spinner'
import Footer from "./common/Footer";

const Root = styled.article`
	height: 100%;
`

class App extends React.PureComponent {
	componentDidMount() {
		const {fetchStuff} = this.props

		fetchStuff && fetchStuff()
	}

	renderPosts = () => {
		const {posts} = this.props

		if (!posts || posts.length === 0)
			return <Spinner/>

		return posts.map(post => {
			return (
				<div key={`post-${post.id}`}>
					<h1>{post.author}</h1>
					<div>{post.content}</div>
				</div>
			)
		})
	}

	render() {
		return (
			<Root>
				<Header />
				{this.renderPosts()}
				<Footer />
			</Root>
		)
	}
}

export default App;
