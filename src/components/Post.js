import React from 'react';
import {Redirect} from 'react-router-dom'

const Post = (props) => {

    let post = props.posts[props.match.params.id - 1]

    return (
        <div>
            {post ? post.title : null} - {post ? post.body : null}
        </div>
    )

}

export default Post