import React from 'react'

const Post = (props) => {

    return (

        <div>
           {props.posts.map(post =>
            <li key={post.id}>
                {`/posts/${post.id}`}>{post.title} {post.body}
            </li>)}
        </div>

    )

}

export default Post