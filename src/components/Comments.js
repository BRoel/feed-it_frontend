import React from 'react';

const Comments = (props) => {

    return (

        <div class='comment'>
            {props.comments && props.comments.map(comment =>
                
                <div key={comment.id}>
                    <p>{comment.content}</p> 
                </div> //Redering Comments

            )}
        </div>

    )

}

export default Comments