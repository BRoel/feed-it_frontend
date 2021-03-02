import React from 'react'
import {Card} from 'react-bootstrap';
import CommentsContainer from '../containers/CommentsContainer';

const Post = (props) => {

    let post = props.posts[props.match.params.id - 1]

    return (
        <Card className='post card'>
            
            <h1>{post ? post.title : null}</h1>
            <p>{post ? post.body : null}</p>
            <CommentsContainer post={post}/>
        
        </Card>
        //if Post exists then render, otherwise null
    )

}

export default Post