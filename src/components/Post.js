import React from 'react'
import {Redirect} from 'react-router-dom'

const Post = (props) => {
    
    console.log(props)

    // let post = props.posts[props.match.params.id]
    // console.log(post)
    return (
        <li>
            {/* {post ? post.title : null} {post ? post.body : null} */}
        </li>
    )

}

export default Post