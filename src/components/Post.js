import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import { deletePost } from '../actions/deletePost';
import CommentsContainer from '../containers/CommentsContainer';

const Post = (props) => {
    console.log('post', props)
    
    let post = props.posts.filter(post => post.id.toString() === props.match.params.id)[0];
    
    const handleDelete = () => { //on form submit state sent to addPost action
       
        props.deletePost(props.match.params.id)
        props.history.push('/posts')
        props.history.go(0)
    }

    const [drop, setDrop] = useState(false);
    const buttonHandler = () => {
        setDrop(current => !current)
    }

    // useEffect(() => {
    //     console.log(drop);
    // }, [drop]);

    if (!drop){
    return (
        <div className='post'>
            <h2>{post ? post.title : null}</h2>
            <img className='post-image' src={post ? post.image : null} alt=''/>
            <hr></hr>
            <br></br>
            <p>{post ? post.body : null}</p>
            <br></br>
            <hr></hr>
            <br></br>
            <button className='button' type='delete' onClick={handleDelete}>Delete</button>
            <br></br>
            <button className='comment-button' onClick={buttonHandler} type="button">
                <i className="far fa-comment-dots">View Comments</i>            
            </button>
        </div>
        //if Post exists then render, otherwise null
    );
    } else {
        return (
            <div className='post'>
                <h2>{post ? post.title : null}</h2>
                <img className='post-image' src={post ? post.image : null} alt=''/>
                <hr></hr>
                <br></br>
                <p>{post ? post.body : null}</p>
                <br></br>
                <hr></hr>
                <br></br>
                <button className='button' type='delete' onClick={handleDelete}>Delete</button>
                <br></br>
                <button className='comment-button' onClick={buttonHandler} type="button">
                    <i className="far fa-comment-dots">Hide Comments</i>            
                </button>
                <CommentsContainer post={post}/>
            </div>
            //if Post exists then render, otherwise null
        );
    }
    
}

export default connect(null, {deletePost})(Post)