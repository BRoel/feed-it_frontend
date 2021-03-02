import React from 'react';

const Comments = (props) => {

    return (

        <div>
            {props.comments && props.comments.map(comment =>
                
                <ul key={comment.id}>
                    {comment.content}
                </ul>  //on itteration key needed

            )}
        </div>

    )

}

export default Comments