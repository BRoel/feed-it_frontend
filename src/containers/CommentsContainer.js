import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/fetchPosts';
import CommentForm from '../components/CommentForm';
import Comments from '../components/Comments';

class CommentsContainer extends React.Component {

    render() {
        return (
            <div>

                <CommentForm post={this.props.post}/>
                <Comments comments={this.props.post && this.props.post.comments}/>
                
            </div> // passing Comments component a comments prop of actions associated with the post
        )
    }

}

const mapStateToProps = state => {
    return {
      comments: state.comments // posts can be accessed as props
    }
}

export default connect(mapStateToProps, {fetchPosts})(CommentsContainer)