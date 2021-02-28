export function fetchPosts(){
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/posts')
        .then(response => response.json())
        .then(posts => dispatch({
            type: 'FETCH_POSTS', //neccesary key for dispatch
            payload: posts //fetching array from backend to use to update store
        }))
    }
}