import React from 'react'
import { Link } from 'react-router-dom';
import LikeToggle from './LikeToggle'

const Posts = (props) => {
    
    return (

        <div className='body'>
            {props.posts.map(post =>  //interating over all posts
           
                <li key={post.id} className='post' id='all-post'>
                    <Link className='link' to={`/posts/${post.id}`}> {post.title} <br/> <img className='post-image' src={post.image} alt=''/></Link> <LikeToggle/>
                </li>
                //created link for each post using interpolation
            )}
        </div>

    )


}

export default Posts