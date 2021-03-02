import React from 'react';

const Comments = (props) => {

    return (

        <div>
            {props.comments && props.comments.map(comment =>
                
                <ul key={comment.id}>
                    {comment.content}   
                </ul>  //Redering Comments

            )}
        </div>

    )

}

export default Comments