import React from 'react';
import styled from 'styled-components'
import Header from './common/Header'
import Spinner from './common/Spinner'
import Footer from "./common/Footer";

const Root = styled.article`
	height: 100%;
`
const CoverPicture = styled.div`
	 height: 500px;
    width: 100%;
    background-image: url(cs.jpg);
    background-color: #cccccc;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    h3 {
      color: white;
      font-size: 50px;
    }
`

const PostBox = styled.div`
	width: 30%;
	height: 250px;
	float: left;
	margin: 10px 10px 100px;
`
const PostsConteiner = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
	&>div {
	  justify-content: center;
		width: 45%;
		margin-top: -30px;
	}
`
const ImageTitle = styled.div`
	background: black;
    opacity: 0.8;
    color: white;
    flex-direction: column;
    padding: 10px;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: flex-start;
`
const Image = styled.img`
    width: 100%;
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


		console.log("props", this.props)

		return posts.map((post, IDX) => {
			return (
				<PostBox key={`post-${post.id}`} onClick={() => this.props.history.push(`/details/${post.id}`)}>
					<Image src={post.img} />
					<ImageTitle>
						<h1>{post.title}</h1>
						<div>{post.author}</div>
					</ImageTitle>
				</PostBox>
			)
		})
	}

	render() {
		return (
			<Root>
				<Header />
				<CoverPicture>
					<h3>Mission Statement TBA</h3>
				</CoverPicture>
				<PostsConteiner>
					<div>
						{this.renderPosts()}
					</div>
				</PostsConteiner>
				<Footer />
			</Root>
		)
	}
}

export default App;
