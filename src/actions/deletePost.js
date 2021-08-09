export const deletePost = (postId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/posts/${postId}`, {

        method: 'DELETE',
        })
        .then(response => response.json())
        .then(post => dispatch({type: 'DELETE_POST', payload: post}))
    }

}