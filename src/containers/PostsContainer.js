import React from 'react';
import {connect} from 'react-redux';

import {fetchPosts} from '../actions/fetchPosts';
import Post from '../components/Post';
import PostForm from '../components/PostForm';

class PostsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPosts() //on mount fetching posts from backend
    }
    
    render() {
        return (
            <header className="App-header">
                <Post posts={this.props.posts}/>
                <PostForm/>
                Feed goes here
            </header>
        )

    }

}

const mapStateToProps = state => {
    return {
      posts: state.posts // posts can be accessed as props
    }
}

export default connect(mapStateToProps, {fetchPosts})(PostsContainer) 
//mapStateToProps to get access to posts in store as props and send them to posts component
//passed fetchPosts to update Redux store