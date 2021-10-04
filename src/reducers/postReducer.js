export default function postReducer(
    state = {
        posts: []
    }, 
    action
    ) {

    switch (action.type) {
        case 'FETCH_POSTS':
            return {
                posts: action.payload
            } //return new version of state from fetch request
        case 'ADD_POST':
            return {
                ...state, 
                posts: [...state.posts, action.payload] // posts point to array with all other existing posts along with new input
            }
        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(post => post !== action.payload)
            }
        case 'ADD_COMMENT':
            let posts = state.posts.map(post => {
                if (post.id === action.payload.id) {  // updating the posts array according to the post coming back from the API, replacing post with the post with the same id
                    return action.payload
                } else {
                    return post
                }
                
            })
            return {...state, posts: posts}

        default:
            return state

    }

}