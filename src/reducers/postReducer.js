export const ACTIONS = {
    ADD_TODO: 'add_todo',
    UPDATE_TODO: 'update_todo',
    DELETE_TODO: 'delete_todo'
}

const PostReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...state, action.post]
        case ACTIONS.UPDATE_TODO:
            state[action.id].title = action.post.title
            state[action.id].description = action.post.description
            return [...state]
        case ACTIONS.DELETE_TODO:
            const post_to_remove = state[action.id]
            return state.filter(post => post !== post_to_remove)
        default:
            return state
    }
}


export default PostReducer