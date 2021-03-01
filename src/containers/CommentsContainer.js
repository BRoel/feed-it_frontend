import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/fetchPosts';
import Posts from '../components/Posts';
import PostForm from '../components/PostForm';
import Post from '../components/Post';
import {Route, Switch} from 'react-router-dom'

class CommentsContainer extends React.Component {

    render() {
        return(
            <div>
                CommentsContainer
            </div>
        )
    }

}




export default CommentsContainer