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
        default:
            return state

    }

    return state

}