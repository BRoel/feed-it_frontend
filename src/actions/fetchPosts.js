export function fetchPosts(){
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/posts') //promise to get response, 
        .then(response => response.json()) //response coverted to Json
        .then(posts => dispatch({ //going into backend and dispatching to reducer
            type: 'FETCH_POSTS', //neccesary key for dispatch (fetch post action)
            payload: posts //fetching array from backend to use to update store
        }))
    }
}