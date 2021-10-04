export const deleteComment = (commentId, postId) => {

    return (dispatch) => {
      
        fetch(`http://localhost:3000/api/v1/posts/${postId}/comments/${commentId}`, {
       
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(comment => {dispatch({type: 'DELETE_COMMENT', payload: comment})}) //sent entire post back with changes
        //dispatched new POST to postreducer
    }
  
}