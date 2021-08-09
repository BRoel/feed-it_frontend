import React from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import { deletePost } from '../actions/deletePost';
import CommentsContainer from '../containers/CommentsContainer';

const Post = (props) => {
    console.log('post', props)
    
    // let post = props.posts[props.match.params.id - 1]
    // debugger
    let post = props.posts.filter(post => post.id.toString() === props.match.params.id)[0]
    
    const handleDelete = () => { //on form submit state sent to addPost action
        props.deletePost(props.match.params.id)
        props.history.go(0).push('/posts')
    }

    return (
        <div class='post'>
            <div className='post-content'>
                { post ? null :<Redirect to='/posts'/> }
                <h1>{post ? post.title : null}</h1>
                
                <img className='post-image' src={post ? post.image : null} alt=''/>
                <hr></hr>
                <p>{post ? post.body : null}</p>
                <hr></hr>
                <button type='delete' onClick={handleDelete}>Delete</button>
            </div>
      
            <CommentsContainer post={post}/>
        
        </div>
        //if Post exists then render, otherwise null
    )

}

export default connect(null, {deletePost})(Post)