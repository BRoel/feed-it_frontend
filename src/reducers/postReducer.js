export default function postReducer(state = {posts: []}, action) {

    switch (action.type) {
        case 'FETCH_POSTS':
            return {posts: action.payload} //return new version of state


    }

    return state

}