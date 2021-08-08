import React from 'react'
import CommentsContainer from '../containers/CommentsContainer';

const Post = (props) => {

    let post = props.posts[props.match.params.id - 1]

    return (
        <div class='post'>
            <div className='post-content'>
                <h1>{post ? post.title : null}</h1>
                <img src={post ? post.image : null} alt=''/>
                <p>{post ? post.body : null}</p>
            </div>
            <hr></hr>
            <CommentsContainer post={post}/>
        
        </div>
        //if Post exists then render, otherwise null
    )

}

export default Post