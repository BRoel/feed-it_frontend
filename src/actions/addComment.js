export const addComment = (comment, postId) => {

    return (dispatch) => {
      
        fetch(`http://localhost:3000/api/v1/posts/${postId}/comments`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',  // fetch POST to API adds new post
            body: JSON.stringify(comment)
        })
        .then(response => response.json())
        .then(post => {
                if (post.error) {
                    alert(post.error)
                } else {
                dispatch({type: 'ADD_COMMENT', payload: post})

                }
            }
        )
        //dispatched new POST to Postreducer
    }
  
}