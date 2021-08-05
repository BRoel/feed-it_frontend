import React from 'react';

const Comments = (props) => {

    return (

        <div class='comment'>
            {props.comments && props.comments.map(comment =>
                
                <ul key={comment.id}>
                    <li>{comment.content}</li> 
                </ul> //Redering Comments

            )}
        </div>

    )

}

export default Comments