import React from 'react';

const Comments = (props) => {
    console.log('comment', props)

    // let comment = props.comments.filter(comment => comment.id.toString() === props.match.params.id)[0]
    
    // const handleDelete = () => { //on form submit state sent to addPost action
    //     props.deleteComment(props.match.comment.id)
    //     props.history.go(0).push(`/${props.post.id}`)
    // }

    return (

        <div className='comment'>
            {props.comments && props.comments.map(comment =>
                
                <div key={comment.id}>
                    <p>{comment.content}</p> 
                    {/* <button type='delete' onClick={handleDelete}>Delete</button> */}
                </div> //Redering Comments

            )}
        </div>

    )

}

export default Comments