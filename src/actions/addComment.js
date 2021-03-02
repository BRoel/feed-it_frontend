export const addComment = (comment, postId) => {

    return (dispatch) => {
      
        fetch(`http://localhost:3000/api/v1/posts/${postId}/comments`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',  // fetch POST, creeating new comment
            body: JSON.stringify(comment)
        })
        .then(response => response.json())
        .then(post => {dispatch({type: 'ADD_COMMENT', payload: post})}) //sent entire post back with changes
        //dispatched new POST to postreducer
    }
  
}