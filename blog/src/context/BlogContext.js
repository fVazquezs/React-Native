import createDataContext from "./createDataContext"

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, {
                id: Math.floor(Math.random() * 9999),
                title: action.payload.title,
                content: action.payload.content
            }]
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'edit_blogpost':
            return state.map(post => {
                return post.id === action.payload.id ?
                    action.payload : blogPost
            })
        default:
            return state
    }
}

const addBlogPost = (dispatch) => (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: { title, content } })
    callback()
}

const deleteBlogPost = dispatch => (id) => {
    dispatch({ type: 'delete_blogpost', payload: id })
}

const editBlogPost = dispatch => (id, title, content, callback) => {
    dispatch({ type: 'edit_blogpost', payload: { id, title, content } })
    callback()
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    [{ id: 1, title: 'Generate', content: 'test' }]
);