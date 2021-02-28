import React from 'react';
import {connect} from 'react-redux';

import {fetchPosts} from '../actions/fetchPosts';
import Post from '../components/Post';
import PostForm from '../components/PostForm';

class PostsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    }
    
    render() {
        return (
            <header className="App-header">
                <Post/>
                <PostForm/>
                Feed goes here
            </header>
        )

    }

}

const mapStateToProps = state => {
    return {
      posts: state.posts
    }
}

export default connect(mapStateToProps, {fetchPosts})(PostsContainer)