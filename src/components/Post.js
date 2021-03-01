import React from 'react'
import {Redirect} from 'react-router-dom'
import {Card} from 'react-bootstrap';

const Post = (props) => {
    
    console.log(props)

    let post = props.posts[props.match.params.id - 1]
    console.log(post)

    return (
        <Card className='post card'>
            
            <h1>{post ? post.title : null}</h1>
            <p>{post ? post.body : null}</p>
        
        </Card>
        //if Post exists then render, otherwise null
    )

}

export default Post