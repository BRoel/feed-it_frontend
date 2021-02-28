import React from 'react'

const Post = (props) => {

    return (

        <div>
           {props.posts.map(post =>
            <ul key={post.id}>
                {post.title} {post.body} {/* {`/posts/${post.id}`} */}
            </ul>)}
        </div>

    )

}

export default Post