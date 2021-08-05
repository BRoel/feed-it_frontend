import React from 'react'
import {Route, Link} from 'react-router-dom';
import Post from './Post';
import LikeToggle from './LikeToggle'

const Posts = (props) => {

    // if (!props.posts){return(<div></div>)}
    
    return (

        <div class='body'>
            {props.posts.map(post =>  //interating over all posts
                <ul key={post.id}>
                    <li class='post' id='all-post'>
                        <Link class='link' to={`/posts/${post.id}`}>{post.title}</Link> <LikeToggle/>
                    </li>
                </ul>
                //created link for each post using interpolation
            )}
        </div>

    )


}

export default Posts