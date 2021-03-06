import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { PostActions } from '../actions';

class PostIndex extends Component {
	componentDidMount() {
		this.props.fetchPosts(); 
	}
	renderPosts() {
		return this.props.posts.map(post => {
			return (
				<li key={post.id} className="list-group-item">
					<Link to={`/posts/${post.id}`}>{post.title}</Link>
				</li>
			)
		})
	}
	render() {
		if(!this.props.posts.length) {
			return <div className="container show-post-container"><p>Loading Posts...</p></div>
		}
		return (
			<div className="container">
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">
						Create a Post
					</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		posts: state.get('blogObject').get('posts')
	}
}

export default connect(mapStateToProps, { ...PostActions})(PostIndex);