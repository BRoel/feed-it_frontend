import React from 'react'
import { Link } from 'react-router-dom';
import LikeToggle from './LikeToggle'

const Posts = (props) => {
    
    return (

        <div class='body'>
            {props.posts.map(post =>  //interating over all posts
                <ul key={post.id}>
                    <li class='post' id='all-post'>
                        <Link class='link' to={`/posts/${post.id}`}>{post.title} <br/> <img className='post-image' src={post.image} alt=''/></Link> <LikeToggle/>
                    </li>
                </ul>
                //created link for each post using interpolation
            )}
        </div>

    )


}

export default Posts