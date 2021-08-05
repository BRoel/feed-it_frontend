import React from 'react'
import CommentsContainer from '../containers/CommentsContainer';

const Post = (props) => {

    let post = props.posts[props.match.params.id - 1]

    return (
        <div class='post'>
            
            <h1>{post ? post.title : null}</h1>
            <p>{post ? post.body : null}</p>
            <CommentsContainer post={post}/>
        
        </div>
        //if Post exists then render, otherwise null
    )

}

export default Post