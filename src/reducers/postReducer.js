export default function postReducer(state = {posts: []}, action) {

    switch (action.type) {
        case 'FETCH_POSTS':
            return {
                posts: action.payload
            } //return new version of state from fetch request
        case 'ADD_POST':
            return {
                ...state, posts: [...state.posts, action.payload] // posts point to array with all other existing posts along with new input
            }
        case 'ADD_COMMENT':
            let posts = state.posts.map(post => {
                if (post.id === action.payload.id) {  // replacing post with the post with the same id on submit
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