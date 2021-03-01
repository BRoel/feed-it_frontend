import React from 'react'
import {Route} from 'react-router-dom';
import Post from './Post';

const Posts = (props) => {

    return (

        <div>
           {props.posts.map(post =>
            <ul key={post.id}>
                <Post post={post}/>
            </ul>)}
        </div>

    )

}

export default Posts