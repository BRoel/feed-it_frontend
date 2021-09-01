import React from 'react'
import {connect} from 'react-redux'
import { deletePost } from '../actions/deletePost';
import CommentsContainer from '../containers/CommentsContainer';

const Post = (props) => {
    console.log('post', props)
    
    let post = props.posts.filter(post => post.id.toString() === props.match.params.id)[0]
    
    const handleDelete = () => { //on form submit state sent to addPost action
        if (window.confirm('Are you sure you want to delete this post?')) {
            props.deletePost(props.match.params.id)
            props.history.push('/posts')
            props.history.go(0)
        } else {
            console.log('post was not deleted');
        }
    }

    return (
        <div className='body'>
            <div className='post'>
                  
                {/* { post ? null :<Redirect to='/posts'/> } */}
                <h1 className='post-content' >{post ? post.title : null}</h1>
                
                <img className='post-image' src={post ? post.image : null} alt=''/>
                <hr></hr>
                <p className='post-content' >{post ? post.body : null}</p>
                <hr></hr>
                <button className='button' type='delete' onClick={handleDelete}>Delete</button>
            
                <CommentsContainer post={post}/>
            
            </div>
        </div>
        //if Post exists then render, otherwise null
    )

}

export default connect(null, {deletePost})(Post)